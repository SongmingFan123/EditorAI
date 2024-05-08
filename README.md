# Project Overview Description # 

Editor Ai is the all-in-one AI powered editing tool that accelerates and improves editing workflow for hyperlocal journalists. It aims to provide AI powered suggestions and an AI Chat Bot, correct grammer and syntax, and offer AP Style Book writing formating. The targeted users are hyperlocal journalists who want an efficient and easy workflow for creating, editing, and promoting their articles on different platforms.

## Project Technical Architecture ##
![image](https://github.com/BU-Spark/se-editor-ai/blob/implemnting-ai-styles/technical_architecture.drawio%20(1).png?raw=true)

### Tech stack ###

Frontend: Next.js, Tailwind CSS, Typescript 

Backend: Python (Flask) 

Database: Firebase

AI Development: Hugging Face, Gemma

Deployment: Vercel & Railway

DevOps Tools: Git

# Instructions on Getting Started #

## Prerequisites and Configuration ##



## How to Run ##

Frontend: Navigate to ```\client\editor-ai\app```

```bash
npm install
npm run dev
```
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Testing ##




## Project Directory Structure ##

This is the general project directory structure for Editor AI:

* se-editor-ai
    * backend
        - chatbot
        - env
        - flask_app
        - tests
  * frontend
        * editor-ai
    
          - .firebase
          - public
          - app
            - admin
            - api
            - components
            - context
            - firebase
            - pages
            - styles
    
  
- ```/client/editor-ai/app/api ``` contains the api calls made for handling documents, ai suggestions, and social media copies
  
- ```/client/editor-ai/app/components ``` contains the resusable components used in the application
  
- -```/client/editor-ai/app/context ``` contains code for user authentication
  
- ```/client/editor-ai/app/firebase ``` contains firebase database connections hosted on Railway
  
- ```/client/editor-ai/app/pages ``` contains frontend code for all the pages
  
- ```/client/editor-ai/app/styles ``` contains all the styles used in the frontend
  
- ```/client/editor-ai/backend/chatbot ``` contains code for ai suggestions and chat bot
  
- ```/client/editor-ai/backend/flask_app ``` contains all routes for application
  
- ```/client/editor-ai/backend/tests ``` contains unit tests for backend
  
## Known Bugs/ Issues ##

- Main Page: Reloading the main page multiple times occasionally redirects users to the login page.
  
- Text Editor Page: Certain functionalities on the text editor page are experiencing unclear interactions and may behave inconsistently.
  
- Promote Page: There is an issue preventing the deployment of promotions from the promote page.
  
## Status ##

## Future Work ##


