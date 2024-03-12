import { ADD_USER_DETAILS, REMOVE_USER_DETAILS } from './userdetails.types';


const INITIAL_STATE = {
    userDetails: {firstName:''},
};

const reducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION RECEIVED ---",action.type,action.payload)
    switch (action.type) {
        case ADD_USER_DETAILS:
            return {
                ...state, userDetails: action.payload ? action.payload : { firstName: '' } ,
            };
        case REMOVE_USER_DETAILS:
            return {
                ...state, userDetails: state.userDetails,
            };
        default: return state;
    }
};

export default reducer;