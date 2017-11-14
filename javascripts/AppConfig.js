"use strict";


app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when("/auth", {
			templateUrl: 'partials/auth.html',  
			controller: 'AuthCtrl' 
		})
		.when("/view", {
			templateUrl: 'partials/contacts/view.html',  
			controller: 'SearchCtrl' 
		})
		.when("/new", {
			templateUrl: 'partials/contacts/new.html',  
			controller: 'WishlistCtrl' 
		})
		.when("/favorites", {
			templateUrl: 'partials/contacts/favorites.html',  
			controller: 'RatedCtrl' 
		})
		.otherwise("/auth"); 

});