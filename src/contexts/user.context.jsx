import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}


const userReducer = (state, action) => {
    console.log("dispatched");
    const { type, payload } =  action;

    console.log("action", action);

    switch(type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in useReducer`)
    }
}

export const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}) => {

    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    console.log("current user", currentUser);

    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPE.SET_CURRENT_USER,
            payload: user
        })
    }


    const value = {currentUser, setCurrentUser};

    useEffect(() => {
      const unsubscribe =   onAuthStateChangedListner((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
      })

      return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
