import { createActions } from "../../utils/reducer/reducers.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";


export const setCategories = (categoriesArray) => 
    createActions(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)