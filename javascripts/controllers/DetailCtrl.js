'use strict';

app.controller("DetailCtrl", function($location, $rootScope, $scope, ContactService){

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
		}).catch((err) => {
			console.log("error in updateContacts", err);
		});
	};

	$scope.contactLove = (contact) => {
		contact.love = !contact.love;
		ContactService.putContact(contact).then((results) => {
		}).catch((err) => {
			console.log("error in updateContacts", err);
		});
	};

	$scope.contactEdit = (contactToEdit) => {
    	$rootScope.contactToEdit = contactToEdit;
    	$rootScope.flag = true;
    	$location.path(`/contacts/edit/${contactToEdit.id}`);
  	};

});
