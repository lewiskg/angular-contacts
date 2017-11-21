'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactService){
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

	$scope.deleteMyContact = (contactId) => {
		ContactService.deleteContact(contactId).then((results) => {
			// console.log("results", results);
			getMyContacts();
		}).catch((err) => {
			console.log("error in deleteMyContacts", err);
		});
	};

	$scope.contactFavorite = (contact) => {
		contact.favorite = !contact.favorite;
		ContactService.updateContact(contact).then((results) => {
			// console.log("results", results);
			getMyContacts();
		}).catch((err) => {
			console.log("error in updateContacts", err);
		});
	};

	$scope.contactDetails = (contactId) => {
    	$location.path(`/contact/detal/${contactId}`);
  	};

	getMyContacts();
	
});
