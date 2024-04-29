from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, T5Tokenizer, T5ForConditionalGeneration
import os
import keras
import keras_nlp
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

class EditorAIChatbot:
    def __init__(self):
        # Initialize models

        self. article_headline = ""
        self. generate_source = ""
        self. revised_article = ""

        self.model = keras_nlp.models.GemmaCausalLM.from_preset("gemma_2b_en")


        # Set environment variables
        credential = DefaultAzureCredential()
        vault_url = "https://kagglegemma.vault.azure.net"   
        secret_client = SecretClient(vault_url=vault_url, credential=credential)



        try:
           
            # Semantic Scholar API key 
            self.s2_api_key = secret_client.get_secret("s2-api-key").value

             #Kaggle  username and API key  
            self.username_secret = secret_client.get_secret("kaggle-username").value
            self.api_key_secret = secret_client.get_secret("kaggle-api-key").value

            # Set environment variables
            os.environ["KAGGLE_USERNAME"] = self.username_secret
            os.environ["KAGGLE_KEY"] = self.api_key_secret
        except Exception as e:
            print("Error:", e)
            os.environ["KAGGLE_USERNAME"] = "your_username"
            os.environ["KAGGLE_KEY"] = "your_key"

        os.environ["KERAS_BACKEND"] = "jax"
        os.environ["XLA_PYTHON_CLIENT_MEM_FRACTION"] = "0.9"

    def create_headline(self, article):
        input_text = f"Create a title for this text based on the original text. Original Text: {article}"
        outputs = self.model.generate(input_text, max_length=50, num_return_sequences=1)
        self. article_headline = output
        return outputs


    def grammar_check(self, article):
        input_text = ('Revise the original text to correct any grammatical and spelling errors, '
      'ensuring that the meaning of the text remains intact and that no additional '
            'or inaccurate information is added. Here is the original text: ' + article)

        outputs = self.model.generate(input_text, max_length=500, num_return_sequences=1)
        self. revised_article = output

        check
        return outputs

    def summarize_article(self, article):
        input_text = ('Summarize the original text in two words or less,'
      'ensuring that the meaning of the text remains intact and that no additional '
            'or inaccurate information added. Here is the original text: ' + article)
        outputs = self.model.generate(input_text, max_length=10) #max length of research ai api
        return outputs

    def generate_source(self, article):
        summary = self.summarize_article(article)
        #semanticscholar api
        headers = {'x-api-key': self.s2_api_key}
        #Finding articles based on topics of article
        params = {'query': summary}
        url = "https://api.semanticscholar.org/v1/paper/search"
        try:
            response = requests.get(url, params=params, headers=headers)
            response.raise_for_status()  
            papers = response.json().get("data", [])
            # Gives ONE similar resource to user
            if papers:
                 first_resource = papers[0]
                 authors = first_resource.get("authors", [])
            if authors:
              first_author = authors[0]  
              self.generate_source = f"Title: {first_resource['title']}, Paper ID: {first_resource['paperId']}, Author: {first_author }"

            else: #"No author info
              self.generate_source = f"Title: {first_resource['title']}, Paper ID: {first_resource['paperId']}"

        except requests.exceptions.HTTPError as err:
            # HTTP error 
            print("Error:", err)

        except Exception as e:
            print("An error occurred:", e)

    
    
    def process_user_request(self, option, article_text):
        if option == "create headline":
            return self.create_headline(article_text)
        elif option == "grammar check":
            return self.grammar_check(article_text)
        elif option == "generate source":
            return self.generate_source(article_text)
        elif option == "AP Style check":
            pass
        else:
            return "Option not recognized. Please try again."


    def chatbot_main(self):
        print("1. Grammar/Spell Check")
        print("2. Create Headline")
        print("3. Generate New Source")
        print("4. AP Style Check - not functional")
  

        option_selected = input("Enter your choice: ")
        options = {
            "1": "grammar check",
            "grammar check": "grammar check",
            "2": "create headline",
            "create headline": "create headline",
            "3": "generate  source",
           "generate source" : "generate source",
            "4": "make ap style changes",
            "make ap style changes" :"make ap style changes",
      
        }

        option_text = options.get(option_selected, "")
        if not option_text:
            print("Invalid option selected. Please restart the chatbot and select a valid option.")
            return
       
       
       
