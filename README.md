# Task Manager

A full-stack Task Manager application built using Node.js, Express.js, HTML, CSS, and JavaScript. The application enables users to efficiently manage their daily tasks through a simple and responsive interface.

## Features

- Create, Read, Update, and Delete (CRUD) Tasks
- Mark Tasks as Completed or Pending
- Search Tasks by Title
- Filter Tasks by Status (All, Pending, Completed)
- Remove All Tasks at Once
- Responsive User Interface
- RESTful API Integration
- Organized Project Structure

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (Vanilla)
- JSON
- CORS

## Project Structure

```text
Task-Manager/
├── app.html          # Frontend UI
├── index.js          # Express backend
├── package.json      # Project dependencies
├── package-lock.json
└── .gitignore
```

## Installation

1. Clone the repository:
   bash
   git clone <your-repo-url>
   cd Task-Manager
   

2. Install dependencies:
   bash
   npm install
  

3. Start the backend server:
   bash
   node index.js
   

4. Open the frontend in your browser:
   - Either open `app.html` directly, or
   - Use a local server (e.g., VS Code Live Server) and navigate to:
     text
     http://127.0.0.1:5500/app.html
     

5. Ensure the backend is running at:
   text
   http://127.0.0.1:5000
   

## API Endpoints

Base URL: `http://127.0.0.1:5000`

- `GET /tasks` – Get all tasks  
- `POST /tasks` – Create a new task  
  json
  { "title": "Study JavaScript" }
  
- `PUT /tasks/:id` – Update a task (title, completed status)  
- `DELETE /tasks/:id` – Delete a task  

## Future Enhancements

- Task Categories or Tags
- Due Date and Reminder System
- User Authentication and Profiles
- Persistent Storage with a Database (e.g., MongoDB, PostgreSQL)
- Deploy Backend and Frontend to Cloud Services

## License

This project is licensed under the MIT License.
