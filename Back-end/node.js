/*
import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');
*/
const express = require('express');
const bodyParser = require('body-parser');
const PocketBase = require('pocketbase');

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new PocketBase({
  app_id: '<xb3t0ngcfl0xv55>',
  app_secret: '<your-app-secret>',
  database: '<new>'
});

// Handle POST request to store user data
app.post('/submit', async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  
  try {
    await client.create('users', { name, password });
    res.send('Data saved successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving data');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

