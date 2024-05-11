// Importing necessary functions and mock utilities
import {
    generateAnswer,
    generateSuggestion,
    generateSocialMediaCopy
  } from 'app/api/handle_ai'; // Make sure the path matches your project structure

  const { textGeneration } = require('@huggingface/inference');

  jest.mock('@huggingface/inference', () => ({
    textGeneration: jest.fn().mockResolvedValue({ generated_text: 'An editor enhances the readability of content.' })
  }));  
  



  
  describe('Text Generator Service', () => {
    let hfToken;

    beforeEach(() => {
        jest.clearAllMocks();
        hfToken = 'fake-hf-token'; // Directly set the token here to avoid potential hoisting issues
        process.env.NEXT_PUBLIC_HF_ACCESS_TOKEN = hfToken; 
    });

      
  
    it('generates suggestions for document content', async () => {
      const documentContent = 'This is some incorrect text content.';
      const suggestions = [{
        header: 'Grammar Correction',
        content: 'Improve verb tenses.',
        incorrectLine: 'This is some incorrect text content.',
        correctLine: 'This is some corrected text content.'
      }];
  
      require('@huggingface/inference').textGeneration.mockResolvedValue({
        generated_text: JSON.stringify(suggestions),
      });
  
      const generatedSuggestions = await generateSuggestion(documentContent);
      expect(generatedSuggestions).toEqual(suggestions);
    });
  
    it('generates social media copy based on document content', async () => {
      const document = 'Here is some content for social media.';
      const expectedCopy = 'Check out our latest story! #news';
  
      require('@huggingface/inference').textGeneration.mockResolvedValue({
        generated_text: expectedCopy,
      });
  
      const socialMediaCopy = await generateSocialMediaCopy(document);
      expect(socialMediaCopy).toBe(expectedCopy);
    });
  
    afterAll(() => {
      jest.resetAllMocks();
    });
  });
  
  