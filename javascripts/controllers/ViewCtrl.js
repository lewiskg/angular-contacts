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
		ContactService.putContact(contact).then((results) => {
			// console.log("results", results);
			getMyContacts();
		}).catch((err) => {
			console.log("error in updateContacts", err);
		});
	};

	$scope.editContact = (contactToEdit) => {
    	$rootScope.contactToEdit = contactToEdit;
    	$rootScope.flag = true;
    	$location.path(`/contacts/edit/${contactToEdit.id}`);
  	};

  	$scope.detailContact = (contactToDetails) => {
		$rootScope.contactToDetails = contactToDetails;
    	$location.path(`/contacts/detail/${contactToDetails.id}`);
  	};


	getMyContacts();
	
});
