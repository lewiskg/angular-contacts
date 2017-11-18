'use strict';

app.controller("NewCtrl", function($scope) {
	$scope.controller = "Hello, NewCtrl. Route:/contacts/new";
	console.log("Hello, NewCtrl. Route:/contacts/new");
});

app.controller("checkForm", function($scope) {
	console.log("in checkForm");
});