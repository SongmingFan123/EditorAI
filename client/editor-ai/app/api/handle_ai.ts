import { useState } from 'react';
import { textGeneration, HfInference } from '@huggingface/inference';

const hfToken = process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN;
const modelName = 'mistralai/Mistral-7B-Instruct-v0.2';
const context = "You're editorai an AI bot designed to help hyperlocal journalist improve their writing. Journalists will ask your questions on general topics and how to improve their article. Please limit your response to 1-2 sentences if possible";

const extractAnswer = (generatedText: string) => {
  const regex = /answer:\s*(.*)/s;
  const match = generatedText.match(regex);

  if (match) {
    return match[1].trim();
  } else {
    return "I'm sorry, I couldn't find a clear answer to your question.";
  }
};

export const generateAnswer = async (question: string, context: string): Promise<string | null> => {
  const inputText = `context: ${context} question: ${question}\ncontext: ${context} answer:`;

  const res = await textGeneration({
    accessToken: hfToken,
    model: modelName,
    inputs: inputText,
  });

  const generatedText = res.generated_text;
  const answer = extractAnswer(generatedText);

  console.log('Generated text:', generatedText);
  console.log('Generated answer:', answer);

  return answer;
};

export const generateSuggestion = async (documentContent: string): Promise<Array<{ header: string; content: string; incorrectLine: string; correctLine: string }> | null> => {
  const question = 'Please provide 3-4 suggestions for improving the following text. For each suggestion, include the incorrect line, the corrected line, and a brief explanation. Format your response as a JSON array, where each suggestion is an object with "header", "content", "incorrectLine", and "correctLine" properties.';
  const inputText = `context: ${context} question: ${question}\ndocument: ${documentContent}\nsuggestions:`;

  const res = await textGeneration({
    accessToken: hfToken,
    model: modelName,
    inputs: inputText,
  });

  const generatedText = res.generated_text;
  const suggestionsJson = extractSuggestionsJson(generatedText);

  console.log('Generated text:', generatedText);
  console.log('Generated suggestions:', suggestionsJson);

  return suggestionsJson;
};

const extractSuggestionsJson = (generatedText: string) => {
    const regex = /suggestions:\s*(.*)/s;
    const match = generatedText.match(regex);
    console.log("Match: " + match)
  
    if (match) {
      try {
        const suggestionsJson = JSON.parse(match[1]);
        return suggestionsJson;
      } catch (error) {
        console.error('Error parsing suggestions JSON:', error);
        return null;
      }
    } else {
      console.warn('No suggestions found in the generated text.');
      return null;
    }
  };