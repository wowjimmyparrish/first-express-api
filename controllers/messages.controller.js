// Description: This file contains the messages controller.
// It defines two functions: getMessages and postMessages.
// These functions will be used as the route handlers for the /messages route.
// The getMessages function returns a list of messages in an unordered list.

// Import the path module
const path = require('path');
// /folder/files.jpg \folder\files.jpg

function getMessages(req, res) {
	// This function will return a list of messages in an unordered list by rendering the messages view.
	res.render('messages', {
		title: 'Messages to my Friends',
		friend: 'Hamburglar',
	});
	// res.sendFile(path.join(__dirname, '..', 'public', 'images', 'grimmace.png'));
}

function postMessages(req, res) {
	console.log('Updating messages...');
}

// Export the functions
module.exports = {
	getMessages,
	postMessages,
};
