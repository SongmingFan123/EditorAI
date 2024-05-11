global.fetch = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
    fetch.mockReset();
  });

describe('Social Media Posting Functions', () => {
    const postToFacebook = async (content) => {
    try {
      const response = await fetch(
        `https://se-editor-ai-production.up.railway.app/promotion/sns/facebook/${content}`, // Corrected the variable here
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error posting to Facebook:", error);
      throw error;
    }
  };
  
  const postToTwitter = async (content) => {
    try {
      const response = await fetch(
        `https://se-editor-ai-production.up.railway.app/promotion/sns/twitter/${content}`, 
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error posting to Twitter:", error);
      throw error;
    }
  };
  


  it('should throw an error when fetch fails', async () => {
    const mockContent = "Sample content for Facebook";
    fetch.mockRejectedValue(new Error("Network error")); 
  
    await expect(postToFacebook(mockContent)).rejects.toThrow("Network error");
  });
});
