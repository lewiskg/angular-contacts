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
	                contacts.push(myContacts[key]);
	            });
	            resolve(contacts);
	    	}).catch((err) => {
	    		reject(err);
	    	});
	    });
	};


	const putContact = (existingContact) => { // firebase returns id when post is successfull
		let contactId = existingContact.id;
		delete existingContact.id;
		delete existingContact.$$hashKey;
		return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(existingContact));
	};

	const postNewContact = (newContact) => { // firebase returns id when post is successfull
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
	};


	const deleteContact = (contactId) => { // firebase returns null when delete is successfull
		// console.log("in deleteContact, contactId", contactId);
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
	};

	return { getContacts, postNewContact, deleteContact, putContact };
}); 
