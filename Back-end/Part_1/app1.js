const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send('Hello world!');
});
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
/*
const form = document.querySelector('#login-form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const name = formData.get('name');
	const password = formData.get('password');
	const data = {
		name: name,
		password: password
	};
	try {
		const response = await fetch('/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const json = await response.json();
		console.log('User data saved:', json);
	} catch (error) {
		console.error('Error saving user data:', error);
	}
});
*/

