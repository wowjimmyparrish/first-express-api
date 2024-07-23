// Description: This file contains the messages controller.
// It defines two functions: getMessages and postMessages.
// These functions will be used as the route handlers for the /messages route.
// The getMessages function returns a list of messages in an unordered list.

function getMessages(req, res) {
	res.send('<ul><li>Hello Albert!</li></ul>');
}

function postMessages(req, res) {
	console.log('Updating messages...');
}

// Export the functions
module.exports = {
	getMessages,
	postMessages,
};
