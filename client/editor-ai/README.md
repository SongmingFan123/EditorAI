# Editor-AI: An AI integrated editing tool for hyperlocal journalists


## Table of Contents
1. [Description](#description)
2. [Getting Started](#getting-started)
3. [General File Information](#general-file-information)
4. [Files and Components](#files-and-components)
6. [Future Work](#future-work)
7. [Contact Info](#contact-info)

# Description:
This is the documentations for the frontend side of Editor-AI.

# Getting Started:

## To Run locally
First, install dependencies.
1. `npm install`
2. `npm run dev`

## Deployment
1. `npm install`
2. `npm run build`

## To build for testing
1. Navigate to `client/se-editor/app/__tests__

# Testing:
Tests are named after the existing files. To perform unit tests:
1. Navigate to `client/se-editor/app/__tests__`
1. Run `npm test` to run all tests OR run `npm test test_file.test.js` to run specific test

## CI/CD pipeline
1. Refer to Railway document: https://railway.app/new/template/zUcpux
1. It is connected to dev branch GitHub

# General File Information

- ```/client/editor-ai/app/api ``` contains the api calls made for handling documents, ai suggestions, and social media copies
  
- ```/client/editor-ai/app/components ``` contains the resusable components used in the application
  
- ```/client/editor-ai/app/context ``` contains code for user authentication
  
- ```/client/editor-ai/app/firebase ``` contains firebase database connections hosted on Railway
  
- ```/client/editor-ai/app/pages ``` contains frontend code for all the pages
  
- ```/client/editor-ai/app/styles ``` contains all the styles used in the frontend
  
- ```/client/editor-ai/backend/chatbot ``` contains code for ai suggestions and chat bot
  
- ```/client/editor-ai/backend/flask_app ``` contains all routes for application
  
- ```/client/editor-ai/backend/tests ``` contains unit tests for backend

# Files and Components:

### Components
  - ActionButton.tsx
      - Button for creating adDocument used in `Homepage.tsx`
  - CreateDocumentModal.tsx
    - Popup for creating a document used in `Homepage.tsx`
  - Divider.tsx
    - Reusable Divider for all the pages 
  - DocumentModal.tsx
    - Resuable Popup (with high filderlity frame styling) that was disregarded becaue of redesigning `Homepage.tsx`
  - Header.tsx
    - Resuable Header with navigation menu
  - Navigationmenu.tsx
    - Navigation menu used in `Header.tsx`
  - ProjectItem.tsx
    - Document icon display for any existing project items in `Homepage.tsx`
  - ProjectSection.tsx 
    - Displays all all existing project items (documents) in `Homepage.tsx`
  - PromoteButton.tsx
    - Button used for redirecting to the promote articles page for social media copies 
  - ProtectedRoute.tsx
    - 

### Pages
  - homepage
    - DeletionModal.tsx
      - 
    - DocumentCreation.tsx
      - 
    - Homepage.tsx
      -   
    - OpenDocumentModal.tsx
      - 
    - ProjectItem.tsx
      - 
    - ProjectItemDisplay.tsx
      - 
    - ProjectSection.jsx
      - 
    - SearchBar.tsx
      - Code for search bar used for querying existing project items (document)
    - UploadButton.tsx
      - 
  - login
    - LoginPage.tsx
      - Consists of code for creating login page
  - profile
    - Profile.tsx
      - Consists of code for viewing and updating profile and user information
  - promotearticles
    - CopyEditor.tsx
      - 
    - EnlargedProjectCard.tsx
      - 
    - PromoteArticle.tsx
      - 
    - SocialMediaContainer.tsx
      - 
  - signup
    - SignupPage.tsx
      - Consists of code for creating signup page
  - texteditor
    - Aside.tsx
      - 
    - Chatbot.tsx
      - 
    - DocumentEditor.tsx
      - 
    - Filters.tsx
      - 
    - Options.tsx
      - 
    - SaveFile.tsx
      - 
    - SaveYourWork.tsx
      - 
    - Submit.tsx
      - 
    - SuggestionBox.tsx
      - 
    - SuggestionsContainer.tsx
      - 
    - TextEditor.tsx
      - Consists of code for displaying the text editor
      


# Future Work:
Listing out some work/bugs that needs to be done on the frontend side. This would be nice to get started with the project.
1. Fixing the bugs when refreshing all the pages
2. Redo the UX design so it follows the client's requirements and is more logical (the high fidelity frames have confusing user interactions)
3. adding a chat history for each document
4. updating the UX & UI to look better
5. Transfer Authentication to the backend
6. Remove AI models in frontend and incoporate AI routes from backend instead


# Contact Info
## Junsun (Lucas) Yoon:
### email: lyoon02@bu.edu

## Tia Hannah:
### email: thannah@bu.edu

## Benjamin Gardiner 
### email: bengard@bu.edu

## Mary Ann Nguyen
### email: nhnguyren@bu.edu
