// import { createContext, useEffect, useReducer } from "react";
// import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
// import { createActions } from "../utils/reducer/reducers.utils";
// import { USER_ACTION_TYPE } from "../store/user/user.types";
// import { setCurrentUser } from "../store/user/user-action";
// import { INITIAL_STATE } from "../store/user/user-reducer";

// // as the actual value you want to access
// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPE = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER',
// }


// const userReducer = (state, action) => {
//     console.log("dispatched");
//     const { type, payload } =  action;

//     console.log("action", action);

//     switch(type) {
//         case USER_ACTION_TYPE.SET_CURRENT_USER:
//             return{
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`unhandled type ${type} in useReducer`)
//     }
// }

// export const INITIAL_STATE = {
//     currentUser: null,
// }

// export const UserProvider = ({children}) => {

//     const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//     console.log("current user", currentUser);

//      setCurrentUser = (user) => {
//         dispatch(
//             createActions(USER_ACTION_TYPE.SET_CURRENT_USER, user)
//         )
//     }


//     const value = {currentUser, setCurrentUser};

//     useEffect(() => {
//       const unsubscribe =   onAuthStateChangedListner((user) => {
//             if(user){
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//       })

//       return unsubscribe
//     }, []);

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }
