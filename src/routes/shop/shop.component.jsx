import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/Product-card.component';
import './shop.styles.scss';
import CategoryPreview from '../../components/category-preview/Category-preview.component';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    console.log("category map", categoriesMap);

    return(
        <div className='shop-container'>
        {
            Object.keys(categoriesMap).map((title) => {

                console.log("category map preview", title);
                const products = categoriesMap[title];
                console.log("category map preview products", products);
                return(
                    <CategoryPreview key={title} title={title} products={products} />
                )

                // return(
                //     <Fragment key={title}>
                //         <h2>{title}</h2>
                //         <div className='products-container'>
                //             {
                //                 categoriesMap[title].map((product) => {
                //                     return(
                //                             <ProductCard key = {product.id} product = {product} />
                //                     )
                //                 })
                //             }
                //         </div>
                //     </Fragment>
                // )
            })
        }
        </div>
    )
}

export default Shop;