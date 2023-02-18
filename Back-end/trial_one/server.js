

const pocketbase = require('pocketbase');
const client = pocketbase({
	apiKey: '8090',
	databaseId: 'xb3t0ngcfl0xv55'
});
client.connecct()
.then(() => {
	console.log('connected to pocketbase database!');
})
.catch((err) => {
	console.log('Failed to connect to pocketbase database:', err);
});

const express = require('express');
const app1 = express();
app1.use(express.json());

app1.post('/users', (req, res) => {
	const data = req.body;
	// TODO: store the users data in the pocketbase database
	 res.json({ message: 'User data saved!' });
});

app.post('/users', (req, res) => {
	const data = req.body;
	client.insert('users', data)
	.then((result) => {
		res.json({ message: 'User data saved!' });
	})
	.catch((err) => {
		console.error('Error saving user data:', err);
		res.status(500).json({ error: 'Failed to save user data' });
	});
});

