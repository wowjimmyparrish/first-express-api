// Description: This file defines the friends controller for the API.
// It contains functions to add a friend, get all friends, and get a friend by ID.

const model = require('../models/friends.model');

function postFriend(req, res) {
	// Check if the name is provided in the request body and return an error response if it's missing
	if (!req.body.name) {
		return res.status(400).json({
			error: 'Name is required',
		});
	}
	// Add a new friend to the list
	const newFriend = {
		// Get the name of the friend from the request body
		name: req.body.name,
		// Assign a unique ID to the friend
		id: model.length,
	};
	// Add the new friend to the list
	model.push(newFriend);
	// Send the new friend as a response
	res.json(newFriend);
}

// Get all friends
function getFriends(req, res) {
	res.json(model);
}

// Get a friend by ID
function getFriend(req, res) {
	// Get the friend ID from the request parameters
	const friendId = Number(req.params.friendId);
	// Find the friend with the given ID
	const friend = model[friendId];
	// Send the friend as a response
	if (friend) {
		res.json(friend);
		// If the friend doesn't exist, send an error response
	} else {
		res.status(404).json({
			error: "Friend doesn't exist",
		});
	}
}

// Export the controller functions
module.exports = {
	postFriend,
	getFriends,
	getFriend,
};
