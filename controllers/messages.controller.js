// Description: This file contains the messages controller.
// It defines two functions: getMessages and postMessages.
// These functions will be used as the route handlers for the /messages route.
// The getMessages function returns a list of messages in an unordered list.

// Import the path module
const path = require('path');
// /folder/files.jpg \folder\files.jpg

function getMessages(req, res) {
	// This line of code uses the sendFile method to send the grimmace.png file as a response to the client. path.join(__dirname, '..', 'public', 'grimmace.png') is used to specify the path to the grimmace.png file.
	res.sendFile(path.join(__dirname, '..', 'public', 'images', 'grimmace.png'));
}

function postMessages(req, res) {
	console.log('Updating messages...');
}

// Export the functions
module.exports = {
	getMessages,
	postMessages,
};
