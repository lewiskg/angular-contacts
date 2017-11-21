'use strict';

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {
	if($rootScope.flag) {
		$scope.controller = "Hello, NewCtrl. Route:/contacts/edit";
	} else {
		$scope.controller = "Hello, NewCtrl. Route:/contacts/new";
	}
	// console.log("Hello, NewCtrl. Route:/contacts/new");

	// $scope.contact = {};


	const fillForm = (contactToEdit) => {
		$scope.contact = contactToEdit;
	};

	$scope.saveContact = (contact) => {
		contact.uid = $rootScope.uid;
		contact.rating = 0;
		// console.log(contact);			
		ContactService.postNewContact(contact).then(() => {
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};

	$scope.reset = function() {
		for (let key in $scope.contact) {  
	    	$scope.contact[key] = null;
	    	// console.log("in reset loop", key, $scope.contact[key]);
	    }
	    $scope.formNewContact.$setPristine();
	    $scope.formNewContact.$setUntouched();
 	};

 	const editContacts = () => {
 		if ($rootScope.contactToEdit) {

 			fillForm($rootScope.contactToEdit);
 			$rootScope.contactToEdit = null;
 			// $rootScope.flag = false;

 		}
 	};

 	$scope.updateContact = (contact) => {
 		ContactService.putContact(contact).then(() => {
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in updateContact", err);
		});
 	};

 	editContacts();

});
