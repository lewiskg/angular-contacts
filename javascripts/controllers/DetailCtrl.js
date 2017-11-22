'use strict';

app.controller("DetailCtrl", function($location, $rootScope, $scope, ContactService){
	$scope.controller = "Hello, DetailCtrl. Route:/contacts/detail/:id";
	// console.log("Hello, DetailCtrl. Route:/contacts/detail:id");

	$scope.contact = $rootScope.contactToDetails;

	$scope.deleteMyContact = (contactId) => {
		ContactService.deleteContact(contactId).then((results) => {
    	$location.path(`/contacts/view`);
		}).catch((err) => {
			console.log("error in deleteMyContacts", err);
		});
	};

	$scope.contactFavorite = (contact) => {
		contact.favorite = !contact.favorite;
		ContactService.putContact(contact).then((results) => {
    	$location.path(`/contacts/favorites`);
		}).catch((err) => {
			console.log("error in updateContacts", err);
		});
	};

	$scope.editContact = (contactToEdit) => {
    	$rootScope.contactToEdit = contactToEdit;
    	$rootScope.flag = true;
    	$location.path(`/contacts/edit/${contactToEdit.id}`);
  	};

});
