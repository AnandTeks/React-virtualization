import { ADD_USER_DETAILS, REMOVE_USER_DETAILS } from './userdetails.types';

export const addUserDetails = (userObject) => {
    console.log("ADD USER DETAILS {}",userObject)
    return {
        type: ADD_USER_DETAILS,
        payload:userObject
    };
};

export const removeUserDetails = (userObject) => {
    return {
        type: REMOVE_USER_DETAILS,
        payload: userObject
    };
};