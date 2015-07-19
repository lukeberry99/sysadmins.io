'use strict';

module.exports = function(app) {
	// Root routing
	var chat = require('../../app/controllers/chat.server.controller');
	app.route('/chat').get(chat.index);
};
