in this trial i decided to try another js frameworks to connect the frontend with the backend 
so i used react as frontend then used node js backend but used express as the backend web application framework for node

PROJECT SETUP 
 Step 1. Building the frontend application
1.First, we will create a React application. Open your terminal and run the following command to create a React application.
    npx create-react-app client
This command will create a React app with boilerplate code in the client folder.

To run the React application, open your terminal and run the following command.
    cd client
    npm start
Step 2. Building the backend Node.js server
Open a new terminal and create a new directory called server and initialize a Node.js project in it.
    mkdir server
    cd server
    npm init -y
    npm install express cors
    npm install nodemon --save-dev
    
Lastly, we will add a start script in the package.json file to start the server.

"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}

1. Import express and cors
const express = require('express');
const cors = require('cors');

2. Create an Express application
const app = express();

app.use(cors());
app.use(express.json());

3 . Create a GET route
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

4. Start the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

To start the backend server open your terminal and run the following command:

npm run dev

step 3. Connect React with Node.js

Open the App.js file in the src folder and then replace the code with the following code.

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App

This tutorial taught us how to connect React with backend Node.js. We have created a simple React application and connected it with backend Node.js. We have used Express.js as a backend framework.
