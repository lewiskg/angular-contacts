"use strict";

app.service("ContactService", function($http, $q, FIREBASE_CONFIG) {

	const getContacts = (userUid) => { // angular promise = $q
	    let contacts = [];
	    return $q((resolve, reject) => { // promise needed if further processing of data required before passing along data
	    	$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
	            let myContacts = results.data;
	            // resolve(myContacts);
	            Object.keys(myContacts).forEach((key) => {
	                myContacts[key].id = key; 
	                resolve(myContacts);
	            });
	    	}).catch((err) => {
	    		reject(err);
	    	});
	    });
	};


const postNewContact = (newContact) => { // firebase returns id when post is successfull
	return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`);
};


const deleteContact = (contactId) => { // firebase returns null when delete is successfull
	console.log("in deleteContact, contactId", contactId);
	return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
};

	return { getContacts, postNewContact, deleteContact };
}); 
