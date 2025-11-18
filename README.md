# Movie Review App – Frontend


The Movie Review App is a simple single‑page application where users can browse a list of movies, view details about each movie, leave their own reviews and ratings and delete reviews or entire movies. It is built with React (using the modern Vite build setup) and communicates with a Node/Express REST API (the backend of the same project) to fetch and persist data. The interface is minimal and responsive, focusing on clarity and ease of use.



### Main Features

**List movies** – displays all movies available in the database.

**Add a movie** - users can add a new movie by providing a title, year and genre.

**View movie details** - more information about a movie, including year, genre and all reviews left by users.

**Add reviews** – leave a 1–5 star rating and comment on a movie.

**Delete reviews** – remove an unwanted review.

**Delete movie** – remove a movie and its reviews.

These features mirror the REST endpoints exposed by the backend, allowing the frontend to remain thin and focused on user interactions.



### Tchnologies & Why They’re Used

**React 18**:	Core UI library; enables building a single‑page application with reusable components and reactive state.

**Vite**:	Next‑generation build tool used to scaffold the project, provide fast local development (npm run dev) and optimized production builds.

**React Router DOM**:	Handles client‑side routing. It allows the app to have multiple pages (/, /add-movie, /movies/:id) without full page reloads.

**Fetch API**:	Used for HTTP requests to the backend (GET, POST, DELETE). Keeps the app lightweight and dependency free; could easily be swapped for Axios if desired.

**CSS (custom)**:	Provides basic styling. The app uses simple cards, buttons and form components; no external UI library was required.

**ESLint**:	Ensures code quality and consistent formatting through the project.


Each tool was selected to keep the project simple while following modern best practices. React and Vite provide an efficient development experience and produce a minimal production bundle. React Router enables clean URLs and separation of concerns, while the Fetch API avoids additional dependencies. ESLint helps maintain a professional codebase.



### Folder Structure
frontend/
├── public/                 # Static assets and index.html
└── src/
    ├── api/
    │   └── api.js          # Exports the API base URL
    ├── components/
    │   └── Navbar.jsx      # Top navigation bar
    ├── pages/
    │   ├── Home.jsx        # List of movies
    │   ├── AddMovie.jsx    # Form to add a new movie
    │   └── MovieDetails.jsx# Details page with reviews
    ├── App.jsx             # Sets up routes and layout
    ├── App.css             # Global styles
    ├── main.jsx            # Entry point; mounts React app
    └── index.css           # Reset styles


This structure keeps components and pages separated. api/api.js exports the base URL used throughout the app; modifying it allows the app to communicate with a deployed backend without changing code elsewhere.



### Installation & Setup

**Requirement**: Node.js (>=18) and npm must be installed on your machine.


**Clone the repository**

git clone https://github.com/xpto2005/movie-review-app-frontend.git
cd movie-review-app-frontend


**Install dependencies**

npm install


**(Optional) Adjust API base URL**

The API base URL is defined in src/api/api.js as a constant:

export const API_URL = "http://localhost:5000";



If your backend runs on a different host or port, change this value accordingly.



**Run the development server**

npm run dev


Vite will start a hot‑reloading server (default on port 5173). Open your browser at http://localhost:5173 and interact with the app.



**Build for production (optional)**

npm run build


The optimized static files will be created in the dist folder.

Since there are no environment variables needed on the frontend, all configuration is done via the exported API URL.




### API Usage (brief overview)

The frontend communicates with the backend via the following endpoints (described in detail in the backend README). All requests and responses use JSON.


GET	/movies	Fetch all movies (Home page).

POST	/movies	Add a movie (Add Movie form).

GET	/movies/:id	Fetch details for a single movie (Movie Details page).

DELETE	/movies/:id	Delete a movie from Movie Details page.

GET	/reviews/:movieId	Load all reviews for a movie (Movie Details page).

POST	/reviews/:movieId	Create a review for a movie (Review form).

DELETE	/reviews/:id	Delete a specific review (Review list).


These endpoints must be available on the backend for the frontend to function. By default, the API base URL is http://localhost:5000, which matches the backend.




###cRequirements & Best Practices

The app uses modern React features such as hooks (useState, useEffect) for state management and side effects. Each page encapsulates its own logic.

Routes are declared in App.jsx using Routes and Route from React Router. The Navbar remains visible while the main view changes.

All forms perform minimal client‑side validation (checking empty fields) before submitting. Further validation is performed on the backend.

Code is linted using ESLint to maintain consistency.



#### Author

Paulo Filipe Soares Oliveira

Feel free to reach out for questions or feedback.