from app import create_app
import pytest
import random
import threading
import uuid
import random



@pytest.fixture(scope="module")
def client():
    """ App client for testing """
    app = create_app(r"../secrets/se-editor-ai-firebase-adminsdk-nd6dz-b1262c7a32.json", True) # init Flask app with test config, adjust route to secrets if needed too
    with app.test_client() as client:
        with app.app_context():
            yield client

# ----------------------------------------
#   FACTORIES FOR DOCUMENT TESTING
# ----------------------------------------
@pytest.fixture(scope="function")
def user_factory():
    """ User factory """
    users = []

    def create_user(username):
        users.append(username)
        return username
    
    def create_random_user():
        s = uuid.uuid4().hex[:8]
        users.append(s)
        return s

    def remove_user(username):
        users.remove(username)

    def clear_user():
        users.clear()

    def get_users():
        return users

    yield create_user, create_random_user, remove_user, get_users, clear_user
    users.clear()


@pytest.fixture(scope="function")
def document_factory(client):
    """ Document factory """

    def create_document(user_id:str):
        """ Create document """
        response = client.post('/documents/create', json={
            "user_id": user_id,
            "document_name": f"Document by {user_id}",
            "document": f"This is the content of the document by {user_id}."
        })
        return response
    
    def read_document(user_id:str, doc_id:str):
        """ Read document """
        response = client.get(f"/documents/read/{user_id}/{doc_id}")
        return response
    
    def read_all_document(user_id:str):
        """ Read all document """
        response = client.get(f"/documents/getall/{user_id}")
        return response
    
    def update_document(user_id:str, doc_id:str):
        """ Update document """
        response = client.put(f"/documents/update", json={
            "user_id": user_id,
            "document_name": f"Document by {user_id}",
            "document_id": f"{doc_id}",
            "document": f"This is the updated content of the document by {user_id}. I love Punjab Palace"
        })
        return response
    
    def delete_document(user_id: str, doc_id: str):
        """ Delete document """
        response = client.delete(f"/documents/delete/{user_id}/{doc_id}")
        return response

    yield create_document, read_document, read_all_document, update_document, delete_document




# ----------------------------------------
#  DOCUMENT TESTING STUFF
# ----------------------------------------
class Test_document_management():
    """ Class for testing document routes """
    
    def test_create_document(client, user_factory, document_factory):
        """ Ensure create document works """
        NUM_CLIENTS = 10
        _, create_random_user, _, get_users, _ = user_factory
        create_document, _, _, _, delete_document = document_factory

        # Initial setup for test
        test_result = list()
        for i in range(NUM_CLIENTS): # Create users for test
            create_random_user()
            test_result.append([False, ""])
        curr_users = get_users()
        added_documents = []

        # Always create document with first id
        res1 = create_document(curr_users[0])
        test_result[0] = [(res1.status_code == 200 and \
                           res1.json["message"] == "Successfully posted!"), "Create"] # Create document with first id
        added_documents.append([curr_users[0], res1.json["data"]])

        # Create document or watch it fail lol
        for num, id in enumerate(curr_users[1:], start=1):
            if random.choice([True, False]): # Randomly choose for a bad test
                res = create_document(curr_users[0])
                test_result[num] = [res.status_code == 400 and \
                                    res.json == {'message': 'Name already exists, please try again'}, "Bad Request"] # Test for error cases with adding the same name
            else: # else test for normal creation
                res = create_document(id)
                test_result[num] = [(res.status_code == 200 and \
                             res.json["message"] ==  "Successfully posted!"), "Create"] # Test for create document
                
                added_documents.append([curr_users[num], res.json["data"]]) # add for future delete
            
        assert all(result for result, msg in test_result), "\n".join(msg for result, msg in test_result if not result) # Test
        for user_id, doc_id in added_documents: # Delete the created documents
            delete_document(user_id, doc_id)


    

    def test_read_document(client, user_factory, document_factory):
        """ Ensure read document works """
        NUM_CLIENTS = 10
        _, create_random_user, _, get_users, _ = user_factory
        create_document, read_document, _, _, delete_document = document_factory

        test_result = list()
        for i in range(NUM_CLIENTS): # Create users for test
            create_random_user()
            test_result.append([False, ""])

        test_result = [[False, ""] for i in range(NUM_CLIENTS)]
        curr_users = get_users()
        added_documents = []

        for num, user_id in enumerate(curr_users):
            if random.choice([True, False]): # Randomly choose for a bad test
                added_documents.append([user_id, "Bad Request"])
                continue
            res = create_document(user_id)
            added_documents.append([user_id, res.json["data"]])

        for num, id in enumerate(added_documents):
            user_id, doc_id = id

            if(doc_id == "Bad Request"): # Test for bad request
                res = read_document(user_id, doc_id)
                test_result[num] = [res.json["message"] == "not found" and \
                                    res.status_code == 404, "Bad Request"]
            else: # Test for good read
                res = read_document(user_id, doc_id)
                test_result[num] = ([res.json["message"]["Title"] == f"Document by {user_id}" and \
                                  res.status_code == 200, "Read"])  

        assert all(result for result, msg in test_result), "\n".join(msg for result, msg in test_result if not result) # Test
        for user_id, doc_id in added_documents: # Delete the created documents
            delete_document(user_id, doc_id)        




    def test_readAll_document(client):
        """ Ensure read all document works """
        NUM_CLIENTS = 10
        _, create_random_user, _, get_users, _ = user_factory
        create_document, read_document, _, _, delete_document = document_factory

        test_result = list()
        for i in range(NUM_CLIENTS): # Create users for test
            create_random_user()
            test_result.append([False, ""])

    def test_update_document(client):
        """ Ensure update document works """
        pass

    def test_delete_document(client):
        """ Ensure delte document works """
        pass