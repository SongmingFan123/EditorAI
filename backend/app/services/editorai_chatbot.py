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

    def create_title(self, article):
        input_text = f"Create a title for this text: {article}"
        outputs = self.model.generate(input_text, max_length=50, num_return_sequences=1)
        return outputs

    def summarize_article(self, article):
        input_text = f"Summarize: {article}"
        outputs = self.model.generate(input_text, max_length=100)
        return outputs
      # Style section
    def formal_style (self,article):
      input_text = (
        'Revise the original text to enhance its formality and professionalism '
        'while maintaining its original meaning. Ensure that the meaning of the '
        'text remains intact and that no additional or inaccurate information '
        'is added. Here is the original text: ' + article)
      outputs = self.model.generate(input_text, max_length=500)
      return outputs
    def conversational_style(self, article):
      input_text = (
        'Revise the original text to enhance its conversational and engaging tone '
        'while maintaining its original meaning. Ensure that the meaning of the '
        'text remains intact and that no additional or inaccurate information '
        'is added. Here is the original text: ' + article
     )
      outputs = self.model.generate(input_text, max_length=500)
      return outputs


    def data_driven_style(self, article):
      input_text = (
        'Revise the original text to enhance its emphasis on the data provided '
        'in the original text, making it data-driven and analytical in its '
        'approach to interpreting the data within the context of the article\'s main points. '
        'Ensure that the meaning of the text remains intact and that no additional '
        'or inaccurate information is added. Here is the original text: ' + article
    )
      outputs = self.model.generate(input_text, max_length=500)
      return outputs

    def make_stylistic_changes(self, article_text):
      print("Stylistic options:")
      print("1: Formal and Professional")
      print("2: Conversational and Engaging")
      print("3: Data-driven and Analytical")

      choice = input("Enter your choice: ").lower()

      if choice == "1" or choice == "formal and professional":
          return self.formal_style(article_text)
      elif choice == "2" or choice == " conversational and engaging":
          return self.conversational_style(article_text)
      elif choice == "3" or choice == "data-driven and analytical":
          return self.data_driven_style(article_text)
      else:
          return "Invalid choice. Please try again."
 

    def process_user_request(self, option, article_text):
        if option == "create a title":
            return self.create_title(article_text)
        elif option == "summarize your article":
            return self.summarize_article(article_text)
        elif option == "Make stylistic changes":
            return self.make_stylistic_changes(article_text)
        else:
            return "Option not recognized. Please try again."


    def chatbot_main(self):
        print("Hi! Please choose the option that best suits your needs:")
        print("1. Create a title")
        print("2. Summarize your article")
        print("3. Make stylistic changes ")
  

        option_selected = input("Enter your choice: ")
        options = {
            "1": "create a title",
            "create a title": "create a title",
            "2": "summarize your article",
           "summarize your article" : "summarize your article",
            "3": "make ap style changes",
            "make ap style changes" :"make ap style changes",
            "4": "make stylistic changes",
            "make stylistic changes":"make stylistic changes",
        }

        option_text = options.get(option_selected, "")
        if not option_text:
            print("Invalid option selected. Please restart the chatbot and select a valid option.")
            return
       
        article_text = input("Please enter the text EditorAI chatbot will adjust: ") # highlighted in the text box 
        result = self.process_user_request(option_text, article_text)
        print(result)


 
