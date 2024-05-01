import { useState } from 'react';
import { textGeneration,HfInference } from '@huggingface/inference'

// const handleAskEditorAI = async (content: string) => {
//     const accessToken = process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN;
//     const [generatedText, setGeneratedText] = useState('');
//     const modelName = 'meta-llama/Meta-Llama-3-8B';
//     const prompt = 'Please provide 3-4 grammar suggestions and corrections for the following text in json format with the following headers type, description of error, incorrect text, corrected text';
//     const input = `PROMPT: ${prompt}\nCONTENT: ${content}\nSUGGESTIONS:`;

//     const output = await textGeneration({
//         accessToken: accessToken,
//         model: modelName,
//         inputs: input
//     });

//     const regex = /SUGGESTIONS: (.+)/s;
//     const matches = output.generated_text.match(regex);
//     const suggestions = matches ? matches[1] : null;
// };

const hfToken = process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN;
const modelName = 'mistralai/Mistral-7B-Instruct-v0.2';

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
    const inputText = `Limit your response to 1-2 sentences if possible. question: ${question}\ncontext: ${context} answer:`;

    const res = await textGeneration({
      accessToken: hfToken,
      model: modelName,
      inputs: inputText
    });

    const generatedText = res.generated_text;
    const answer = extractAnswer(generatedText);

    console.log('Generated text:', generatedText)
    console.log('Generated answer:', answer)
  
    return answer;
};