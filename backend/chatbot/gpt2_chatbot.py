from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from transformers import T5Tokenizer, T5ForConditionalGeneration
 # This function would integrate with a model to create a title for the article


def articleTitleModel(article):
    tokenizer = AutoTokenizer.from_pretrained("czearing/article-title-generator")
    model = AutoModelForSeq2SeqLM.from_pretrained("czearing/article-title-generator")

    input_text = f"Create a title for this text: {article}"
    input_ids = tokenizer(input_text, return_tensors="pt").input_ids
    
    # Generate output
    outputs = model.generate(input_ids, max_length=50, num_return_sequences=1)
    title = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    return title
#Summary
# This function would integrate with a model to summarize the article
#xxl would be optimal but it takes too long to load so large is the best for time 


def summarizeArticleModel(article):
  tokenizer = T5Tokenizer.from_pretrained("google/flan-t5-large")
  model = T5ForConditionalGeneration.from_pretrained("google/flan-t5-large")
  input_text =  f"Summarize : {article}"
  input_ids = tokenizer(input_text, return_tensors="pt").input_ids
   #max_length determine how long the summary will be
  outputs = model.generate(input_ids, max_length = 100)
  summary = tokenizer.decode(outputs[0])
  return summary

#def styleArticleModel (normal, formal and professional, data driven and analysical,conversational and engaging,enthusiastic and passionate)

#Get and process users respone
def user_input(prompt):
    return input(prompt)

    
def process_user_request(option, article_text):
    if option == "create a title":
        return articleTitleModel(article_text)
    elif option == "summarize your article":
        return summarizeArticleModel(article_text)
    else:
        return "Option not recognized. Please try again."
#main chat bot

def chatbot_main():
    print("Hi! Please choose the option that best suits your needs:")
    print("1. Create a title")
    print("2. Summarize your article")
    print("3. Make AP style changes -not functional")
    print("4. Make stylistic changes - not functional")
    
    option_selected = user_input("Enter the number of your choice: ")
    options = {
        "1": "create a title",
        "2": "summarize your article",
        "3": "make ap style changes",
        "4": "make stylistic changes"
    }
    
    option_text = options.get(option_selected, "")
    if not option_text:
        print("Invalid option selected. Please restart the chatbot and select a valid option.")
        return
    
    article_text = user_input("Please enter the text EditorAI chatbot will adjust: ")
    result = process_user_request(option_text, article_text)
    print(result)

if __name__ == "__main__":
    chatbot_main() 