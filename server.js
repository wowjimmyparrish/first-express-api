// Purpose: Create a simple Express server that allows users to add friends and send messages to each other.

// Import the express module
const express = require('express');

// Import the friends and messages routers
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

// Create an express application
const app = express();
// Set the port number
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());
// Use the friends and messages routers by mounting them to the app
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
