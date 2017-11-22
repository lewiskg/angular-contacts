'use strict';

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {
	// if($rootScope.flag) {
	// 	$scope.controller = "Hello, NewCtrl. Route:/contacts/edit/:id";
	// 	// console.log("Hello, NewCtrl. Route:/contacts/edit/:id");
	// } else {
	// 	$scope.controller = "Hello, NewCtrl. Route:/contacts/new";
	// 	// console.log("Hello, NewCtrl. Route:/contacts/new");
	// }

	$scope.saveContact = (contact) => {
		contact.uid = $rootScope.uid;
		contact.favorite = false;
		ContactService.postNewContact(contact).then(() => {
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};

	$scope.reset = function() {
		for (let key in $scope.contact) {  
	    	$scope.contact[key] = null;
	    }
	    $scope.formNewContact.$setPristine();
	    $scope.formNewContact.$setUntouched();
 	};


 	const editContacts = () => {
 		if ($rootScope.contactToEdit) {
 			$scope.contact = $rootScope.contactToEdit;
 			$rootScope.contactToEdit = null;
 			// $rootScope.flag = false;
 		}
 	};

 	$scope.updateContact = (contact) => {
 		ContactService.putContact(contact).then(() => {
			$location.path('/contacts/view');
			$rootScope.flag = false;
		}).catch((err) => {
			console.log("error in updateContact", err);
		});
 	};

 	editContacts();

});
