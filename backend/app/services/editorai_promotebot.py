# pip install azure-identity
# pip install --upgrade keras-nlp
# pip install azure-keyvault-secrets

# Importing necessary libraries
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, T5Tokenizer, T5ForConditionalGeneration
import os
import keras
import keras_nlp
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient


class PromoteBot:
  def __init__(self):
        # Initialize models

        self.copy_model = keras_nlp.models.GemmaCausalLM.from_preset("gemma_2b_en")
 
         # Set environment variables (kaggle/Azure)
        credential = DefaultAzureCredential()
        vault_url = "https://kagglegemma.vault.azure.net"  # Update with your Key Vault URL
        secret_client = SecretClient(vault_url=vault_url, credential=credential)

        try:
            # Get username and API key 
            username_secret = secret_client.get_secret("Username").value
            api_key_secret = secret_client.get_secret("Key").value

            os.environ["KAGGLE_USERNAME"] = username_secret
            os.environ["KAGGLE_KEY"] = api_key_secret
        except Exception as e:
            print("Error:", e)
            os.environ["KAGGLE_USERNAME"] = "your_username"
            os.environ["KAGGLE_KEY"] = "your_key"

        os.environ["KERAS_BACKEND"] = "jax"
        os.environ["XLA_PYTHON_CLIENT_MEM_FRACTION"] = "0.9"

         # Authenticate with Twitter/other social API
         #FB
         #INSTA
       
  
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


  def create_social_media_copy(self, article):
        input_text = f"Craft a social media transcript for the following text that is both engaging, with emojis and Emphasizes the core message of the article, Keep the tone positive and relatable. : {article}"
        social_media_copy = self.copy_model.generate(input_text, max_length=300)
        return social_media_copy
      
    def make_stylistic_changes(self, article_text):
        print("Stylistic options:")
        print("1: Conversational and Engaging")
        print("2: Data-driven and Analytical")

        choice = input("Enter your choice: ")

        if choice == "1":
            article = self.conversational_style(article_text)
            conversational_social_copy = self.create_social_media_copy(article)
            # return  conversational_social_copy --> put in social media box through api
        elif choice == "2":
            article = self.data_driven_style(article_text)
            data_social_copy = self.create_social_media_copy(article)
            # return data_social_copy --> put in social media box through api
        else:
            return "Invalid choice. Please try again."

  def process_social_request(self, option_text, article_text):
        if option_button == 'Twitter':
            # Print SM Copy to Twitter/ Need APIKEY box
            pass
        elif option_button == 'Facebook':
            # Print SM Copy to Facebook/APIKEY bos
            pass
        elif option_button == 'Instagram':
            # Print SM Copy to Instagram/APIKEY
            pass
        else:
            return "Invalid option selected. Please select Twitter, Facebook, or Instagram."
