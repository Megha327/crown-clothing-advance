import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/Product-card.component';
import CategoryPreview from '../../components/category-preview/Category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
   
    return(
        <>
        {
            Object.keys(categoriesMap).map((title) => {

                const products = categoriesMap[title];
                return(
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })
        }
        </>
    )
}

export default CategoriesPreview;