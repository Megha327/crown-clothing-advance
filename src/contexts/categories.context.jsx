import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments, getcategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getcategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, [])

    // this code call only once beacause for data store in the DB

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);
    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}