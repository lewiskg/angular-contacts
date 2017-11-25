'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactService){

	const getMyContacts = () => {	
		ContactService.getContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((err) => {
			console.log("error in getMyContacts", err);
		});
	};

	$scope.deleteMyContact = (contactId) => {
		ContactService.deleteContact(contactId).then((results) => {
			getMyContacts();
		}).catch((err) => {
			console.log("error in deleteMyContacts", err);
		});
	};

	$scope.contactFavorite = (contact) => {
		contact.favorite = !contact.favorite;
		ContactService.putContact(contact).then((results) => {
			getMyContacts();
		}).catch((err) => {
			console.log("error in updateContacts", err);
		});
	};

	$scope.contactLove = (contact) => {
		contact.love = !contact.love;
		ContactService.putContact(contact).then((results) => {
			getMyContacts();
		}).catch((err) => {
			console.log("error in updateContacts", err);
		});
	};

	$scope.contactEdit = (contactToEdit) => {
    	$rootScope.contactToEdit = contactToEdit;
    	$rootScope.flag = true;
    	$location.path(`/contacts/edit/${contactToEdit.id}`);
  	};

  	$scope.contactDetail = (contactToDetails) => {
		$rootScope.contactToDetails = contactToDetails;
    	$location.path(`/contacts/detail/${contactToDetails.id}`);
  	};


	getMyContacts();
	
});
