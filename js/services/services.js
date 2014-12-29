'use strict';

/* Services */

angular
	.module('quizzes', ['ngResource'])
	.factory('QuizData', '$http', function($resource, $http){
			return $resource('/quizzes/quiz.json');
  	});

app
	.factory('QuizForm', function() {
		return {
			quizAnswer: null,
		}
	});