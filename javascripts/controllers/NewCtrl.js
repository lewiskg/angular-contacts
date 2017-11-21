'use strict';

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {
	$scope.controller = "Hello, NewCtrl. Route:/contacts/new";
	console.log("Hello, NewCtrl. Route:/contacts/new");


	// const createContact = (contact) => {
	// 	return {
	// 		"firstName": contact.firstName,
	// 		"lastName":  contact.lastName,
	// 		"phoneHome": contact.phoneHome,
	// 		"phoneWork": contact.phoneWork,
	// 		"emailHome": contact.emailHome,
	// 		"emailWork": contact.emailWork,
	// 		"notes":	 contact.notes,
	// 		"uid": $rootScope.uid
	// 	};
	// };

	$scope.saveContact = (contact) => {
		contact.uid = $rootScope.uid;
		console.log(contact);			
		ContactService.postNewContact(contact).then(() => {
			$location.path('/contacts/view');
		}).catch((err) => {
			console.log("error in postNewContact", err);
		});
	};


	$scope.reset = function() {
	    $scope.formNewContact.$setPristine();
	    $scope.formNewContact.$setUntouched();
 	};


});
