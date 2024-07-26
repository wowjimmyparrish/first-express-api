// Purpose: Create a simple Express server that allows users to add friends and send messages to each other.

// Import the express module
const express = require('express');
const path = require('path');

// Import the friends and messages routers
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

// Create an express application
const app = express();

// Set the view engine to handlebars
app.set('view engine', 'hbs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the port number
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());
// This sets the title and caption for the index page
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Grimmace your house looks like a pigpen',
		caption: 'Does it Ronald?',
	});
});
// Use the friends and messages routers by mounting them to the app
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
