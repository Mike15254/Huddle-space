/*
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

export default App;


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
*/

import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;

