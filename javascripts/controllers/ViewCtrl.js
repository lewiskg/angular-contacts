'use strict';

app.controller("ViewCtrl", function($rootScope, $scope, ContactService){
	$scope.controller = "Hello, ViewCtrl. Route:/contacts/view";
	// console.log("Hello, NewCtrl. Route:/contacts/view");

	$scope.contacts = [];

	const getMyContacts = () => {	
		ContactService.getContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getMyContacts", err);
		});
	};

	getMyContacts();

	$scope.deleteMyContact = (contactId) => {
		ContactService.deleteContact(contactId).then((results) => {
			// console.log("results", results);
			getMyContacts();
		}).catch((err) => {
			console.log("error in deleteMyContacts", err);
		});
	};




});
