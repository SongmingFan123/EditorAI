# pip install azure-identity
# pip install --upgrade keras-nlp
# pip install azure-keyvault-secrets

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, T5Tokenizer, T5ForConditionalGeneration
import os
import keras
import keras_nlp
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

class AskEditorAIChatbot:
    def __init__(self):
        # Initialize models
        self.model = keras_nlp.models.GemmaCausalLM.from_preset("gemma_2b_en")


        # Set environment variables
        credential = DefaultAzureCredential()
        vault_url = "https://kagglegemma.vault.azure.net"   
        secret_client = SecretClient(vault_url=vault_url, credential=credential)

        try:
          

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

    def respond_to_user(self, input):
        user_input = input("Tell me more... ")
        outputs = self.model.generate(user_input, max_length=75, num_return_sequences=1)
        return outputs
