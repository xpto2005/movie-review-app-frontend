## Movie Review App – Frontend

## Description

This is the frontend of the Movie Review App.
It is a React-based interface built with Vite, designed to interact with the backend API and display movies, reviews, and forms.

The interface currently includes navigation, routing and placeholder pages that will later be connected to the backend.



## Chosen Stack

React 18

Vite

JavaScript

React Router DOM

Custom CSS



## Project Structure

frontend/
  public/
  src/
    components/
      Navbar.jsx
    pages/
      Home.jsx
      AddMovie.jsx
      MovieDetails.jsx
    App.jsx
    main.jsx
    index.css
    App.css
  package.json
  vite.config.js
  README.md



## Implemented Features

Routing

Using React Router DOM:

/ → Home Page

/add-movie → Add Movie Page

/movies/:id → Movie Details Page

Navbar

A simple navigation bar that allows switching between pages.

Pages (Placeholder Content)

Home: Placeholder for movie list

Add Movie: Placeholder for movie creation form

Movie Details: Placeholder showing a selected movie ID



## Frontend Dependencies

Current installed dependencies:

react
react-dom
react-router-dom
vite
@vitejs/plugin-react


Dev dependencies installed automatically:

eslint
eslint-config-react
eslint-js



## Environment Variables

At this stage, the frontend does not require environment variables.

(When I integrate the backend, I will add VITE_API_URL.)



## How to Run the Frontend Locally
1. Navigate to the frontend folder
cd frontend

2. Install dependencies
npm install

3. Start the development server
npm run dev


## The application will run at:

http://localhost:5173/

 

## REST Endpoints (Planned Integration)

These endpoints will be consumed by the frontend in later phases:

GET    /movies
POST   /movies
GET    /movies/:id
POST   /reviews
DELETE /movies/:id
DELETE /reviews/:id


No API calls have been implemented yet.



## Current Limitations

Movie list not yet fetched from backend

No form submission implemented

Movie details not loaded dynamically

No loading/error states

UI still in basic placeholder mode



## Future Enhancements

Connect all pages to backend

Display movie list with styles

Add new movie via form

Add reviews to movies

Delete movies and reviews

Improve UI layout

Add loading/error handling

Deploy to Vercel or Netlify



## Status

Frontend structure completed

Router and pages implemented

Navbar functional

Backend integration coming next