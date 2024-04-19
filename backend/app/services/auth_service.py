from firebase_admin import firestore


class auth_service:

    def __init__(self):
        self.db = firestore.client()

    def add_new_user(self, userInfo: dict):
        pass

    def update_user(self, userInfo: dict):
        pass

    def delete_user(self, userID: str):
        pass

    def get_user(self, userID: str):
        pass

    def get_all_users(self):
        pass
