# Proyecto Mi amante ideal
The project consists of a traditional API for registering and finding ideal lovers, where users can post profiles and others can consult them based on interests, using a decoupled backend and frontend with a clear layered architecture.

It will execute all the code locally without external dependencies.

## Authors
 * Isaac Villalobos Bonilla, 2024124285
 * Christopher Daniel Vargas Villalta, 2024108443
   
---
## Architecture
* NodeJS with Express
* REST
* Decoupled backend and frontend

---
## Database Architecture
* MongoDB local will be the database engine of choice for the project
* It will contain a small seeded dataset loaded automatically

---
## Workflow 1 (Post lover profiles)
* Step 1. The user fills a form in the frontend application (React)
* Step 2. The frontend sends the JSON via POST /amantes to the backend API
* Step 3. The JSON contains name, age, interests
* Step 4. The endpoint /amantes validates the data using DTOs and inserts it into MongoDB, ensuring all business rules are respected
* Step 5. The backend returns a response and the frontend updates the UI accordingly
---
## Workflow 2 (Get lovers based on interest)
* Step 1. The user selects or inputs an interest in the frontend application
* Step 2. The frontend sends the request via GET /amantes?interes=x to the backend API
* Step 3. The backend processes the query parameter and searches in MongoDB
* Step 4. The endpoint returns all profiles matching the specified interest
* Step 5. The frontend receives the data and renders the results dynamically

---
## Layered design
* The API is based on a layered architecture that consists on:
* Controllers layer (Handles HTTP requests and responses)
* Services layer (Contains business logic and validations)
* Repositories layer (Handles database interaction with MongoDB)
* Model layer (Defines schema for lover profiles)
* DTO layer (Validates incoming data (name, age, interests))

---
## FrontEnd
* Built with React
* Uses client-side rendering
* Communicates with backend via REST API

---
## Scripts
Backend:
* npm run dev
Frontend:
* npm run dev

---
## MultiRepo
* The link of the repository for the backend:
* The backend will be in /backend
* The link of the repository for the frontend:
* The frontend will be in /frontend

---
## Paradigm
* OOP: The system is designed using an object-oriented approach, where each layer (controllers, services, repositories, models, and DTOs) is represented through objects with specific responsibilities.
DTOs (Data Transfer Objects) are used to transport data between layers without containing business logic. Their responsibility is to validate input data types and structure, and to construct objects with the required attributes for further processing.
* Imperativo: The application follows an imperative execution flow, where explicit steps are defined: receiving the request, validating data through DTOs, executing business logic in services, interacting with repositories, and returning a response.