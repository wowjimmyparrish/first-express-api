// Description: This file contains the routes for friends. It imports the friends controller and creates a router for friends. It then defines the routes for friends and exports the friends router.

// Import express
const express = require('express');

// Import the friends controller
const friendsController = require('../controllers/friends.controller');

// Create a router for friends
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
	console.log('Time: ', Date.now());
	next();
});
// Routes for friends
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

// Export the friends router
module.exports = friendsRouter;
