import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getcategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
   
    const dispatch = useDispatch();
     
    useEffect(() => {
        const getCategoriesMap = async () => {
          const categoryMap = await getcategoriesAndDocuments('categories');
          dispatch(setCategoriesMap(categoryMap));
        };
    
        getCategoriesMap();
      }, []);
   

    return(
       <Routes>
        <Route index element={<CategoriesPreview />}></Route>
        <Route path=":category" element={<Category />}></Route>
       </Routes>
    )
}

export default Shop;