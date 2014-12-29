'use strict';

/* defining the app */
var app = angular
	.module("quizApp", ['quizzes','ngResource'])
	.config(['$routeProvider', function($routeProvider) {

    $routeProvider
			.when('/', {templateUrl: 'partials/home.html'})
			.when('/quiz', {templateUrl: 'partials/quiz.html', controller: app.QuizDetail})
			.otherwise({redirectTo: '/'});
	}]);