# pip install azure-identity
# pip install --upgrade keras-nlp
# pip install azure-keyvault-secrets

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, T5Tokenizer, T5ForConditionalGeneration
import os
import keras
import keras_nlp
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

class EditorAIChatbot:
    def __init__(self):
        # Initialize models


        self.model = keras_nlp.models.GemmaCausalLM.from_preset("gemma_2b_en")

        # Set environment variables
        credential = DefaultAzureCredential()
        vault_url = "https://kagglegemma.vault.azure.net"   
        secret_client = SecretClient(vault_url=vault_url, credential=credential)

        try:
            # Get username and API key from Key Vault secrets
            username_secret = secret_client.get_secret("Username").value
            api_key_secret = secret_client.get_secret("Key").value

            # Set environment variables
            os.environ["KAGGLE_USERNAME"] = username_secret
            os.environ["KAGGLE_KEY"] = api_key_secret
        except Exception as e:
            print("Error:", e)
            os.environ["KAGGLE_USERNAME"] = "your_username"
            os.environ["KAGGLE_KEY"] = "your_key"

        os.environ["KERAS_BACKEND"] = "jax"
        os.environ["XLA_PYTHON_CLIENT_MEM_FRACTION"] = "0.9"

    def create_headline(self, article):
        input_text = f"Create a title for this text: {article}"
        outputs = self.model.generate(input_text, max_length=50, num_return_sequences=1)
        return outputs


    def grammer_check(self, article):
        input_text = ('Revise the original text to correct any grammatical and spelling errors, '
      'ensuring that the meaning of the text remains intact and that no additional '
            'or inaccurate information is added. Here is the original text: ' + article
)

        outputs = self.model.generate(input_text, max_length=500, num_return_sequences=1)
        return outputs

    def summarize_article(self, article):
        input_text = f"Summarize: {article}"
        outputs = self.model.generate(input_text, max_length=30) #max length of research ai api
        return outputs
    def generate_source(self, article):
        summary = summarize_article(article)
        pass
         # Put short summary in research ai api requested api code--> https://www.semanticscholar.org/product/api#api-key-form
      

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
       
