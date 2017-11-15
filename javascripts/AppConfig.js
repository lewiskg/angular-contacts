"use strict";


app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
		.when("/login", {
			templateUrl: 'partials/login.html',  
			controller: 'LoginCtrl' 
		})
		.when("/view", {
			templateUrl: 'partials/view.html',  
			controller: 'ViewCtrl' 
		})
		.when("/new", {
			templateUrl: 'partials/new.html',  
			controller: 'NewCtrl' 
		})
		.when("/favorites", {
			templateUrl: 'partials/favorites.html',  
			controller: 'FavoritesCtrl' 
		})
		.otherwise("/login"); 

});