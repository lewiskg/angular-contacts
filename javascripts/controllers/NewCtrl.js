'use strict';

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactService) {
	$scope.controller = "Hello, NewCtrl. Route:/contacts/new";
	// console.log("Hello, NewCtrl. Route:/contacts/new");


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

 // 	$scope.isFormValid = function(){
	//     if ($scope.formNewContact.$invalid || $scope.formNewContact.$prestine) {
	//     	console.log("in isFormValid", $scope.formNewContact.$valid);
	//         return true;
	//     }
	// };

});
