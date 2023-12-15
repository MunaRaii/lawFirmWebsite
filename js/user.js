
function isUserExist(userId){
    return store.users.hasOwnProperty(userId);
}

/** 
 * Check any user is login or not
 */
function isUserLoggedIn(){
    return !!store?.activeUserId;
}

/** 
 * Provide the currently login user id
 */
function getLoginUserId(){
    if(isUserLoggedIn()){
        return store.activeUserId;
    }
    return '';
};

/** 
 * Validate the user information for crate new user in system
 */
function validateSignupDetails(){

}


/** 
 * Create new user
 */
function createNewUser( userInfo ){

}


/** 
 * Validate user details for login
 */
function authenticateUser( userCredentials ){

}


function getUserServicesId( userId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].services;
    }
    return [];
}


function getUserFavServicesId( userId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].favServices;
    }
    return [];
}

