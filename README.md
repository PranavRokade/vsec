# Todo App (React + React Router + Express + MongoDB)

## Requirements
- Node.js
- MongoDB running locally (mongodb://127.0.0.1:27017)

## Run the backend
    cd backend
    npm install
    npm start        # http://localhost:5000

## Run the frontend (new terminal)
    cd frontend
    npm install
    npm run dev      # http://localhost:5173

## Using MongoDB Atlas instead
In backend/server.js, replace the mongoose.connect(...) string with your Atlas connection string.
