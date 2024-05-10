import { createActions } from "../../utils/reducer/reducers.utils"
import { USER_ACTION_TYPE } from "./user.types";


export const setCurrentUser = (user) => 
    createActions(USER_ACTION_TYPE.SET_CURRENT_USER, user);
