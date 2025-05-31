# ID Card Generator

A simple web app to generate ID card data using a form and store it in a local MongoDB database.

## Features

- Responsive HTML form to collect user details like name, DOB, USN, branch, blood group, emergency contact, email, and company/institute.
- Backend server using Node.js, Express, and Mongoose to save data into MongoDB.
- Data can be viewed and managed via MongoDB Compass.
- CORS enabled to allow frontend and backend communication.
- Clean and modern UI with CSS styling.

## Tech Stack

- Frontend: HTML, CSS, JavaScript (Fetch API)
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Database: MongoDB (local instance)

## Installation and Usage

1. **Clone the repo**

```bash
git clone https://github.com/CHINNIRATHOD/id-card-generator.git
cd id-card-generator
Setup backend



cd server
npm install
Run backend server

Make sure MongoDB is running locally on your machine.
Start the server:


node server.js
You should see:


🚀 Server running at http://localhost:3000
✅ Connected to MongoDB locally
Open frontend

Open index.html in your browser (located in the project root or client folder).

Use the form

Fill the form and submit to save data into MongoDB.

View data

Open MongoDB Compass and connect to mongodb://127.0.0.1:27017
Check the database idcards and collection users.

Folder Structure

id-card-generator/
├── server/
│   ├── models/
│   │   └── User.js
│   ├── server.js
│   └── package.json
├── index.html
└── style.css
