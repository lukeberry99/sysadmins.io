'use strict';

// Setting up route
angular.module('core')
    .config(['$stateProvider', '$urlRouterProvider', '$routeProvider',
	    function($routeProvider) {
            $routeProvider
                .when('/chat'), {
                    templateUrl: '../../../../app/views/index.server.view.html',
                    controller: 'ChatController',
                    css: '../css/chat.css'
                }
	}
]);
