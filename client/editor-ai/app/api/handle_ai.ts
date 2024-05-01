import { useState } from 'react';
import { textGeneration, HfInference } from '@huggingface/inference';

const hfToken = process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN;
const modelName = 'mistralai/Mistral-7B-Instruct-v0.2';
const context = "You're editorai an AI bot designed to help hyperlocal journalist improve their writing. Journalists will ask your questions on general topics and how to improve their article. Please limit your response to 1-2 sentences if possible";

export const generateAnswer = async (question: string, context: string): Promise<string | null> => {
  const inputText = `context: ${context} question: ${question}\ncontext: ${context} answer:`;

  const res = await textGeneration({
    accessToken: hfToken,
    model: modelName,
    inputs: inputText,
    parameters: {
        max_new_tokens: 200,
        return_full_text:false    
    },
  });

  const generatedText = res.generated_text;

  console.log('Generated text:', generatedText);

  return generatedText;
};

export const generateSuggestion = async (documentContent: string): Promise<Array<{ header: string; content: string; incorrectLine: string; correctLine: string }> | null> => {
    const question = 'Please provide 3-4 suggestions for improving the following text. For each suggestion, include the incorrect line, the corrected line, and a brief explanation. Format your response as a JSON array, where each suggestion is an object with "header", "content", "incorrectLine", and "correctLine" properties.';
    const inputText = `context: ${context} question: ${question}\ndocument: ${documentContent}\nsuggestions:`;
  
    const res = await textGeneration({
      accessToken: hfToken,
      model: modelName,
      inputs: inputText,
      parameters: {
        max_new_tokens: 2000,
        return_full_text: false    
      },
    });
  
    const generatedText = res.generated_text;
  
    try {
      // Remove the "Generated text:" label if present
      const jsonString = generatedText.replace(/^Generated text:\s*/, '');
  
      // Parse the JSON string into a JavaScript object
      const suggestions = JSON.parse(jsonString);
  
      console.log('Generated suggestions:', suggestions);
  
      return suggestions;
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;
    }
  }
