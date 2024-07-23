const express = require('express');

// Create a router for messages
const messagesRouter = express.Router();

// Import the messages controller
const messagesController = require('../controllers/messages.controller');

// Routes for messages
messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessages);

// Export the messages router
module.exports = messagesRouter;
