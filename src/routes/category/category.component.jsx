import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/Product-card.component';

const Category = () => {
    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);
    return(
        <>
            <h2 className='title'>{category.toUpperCase()}</h2>            
            <div className='category-container'>
                {
                    products && products.map((product) => {
                        return(
                            <ProductCard key = {product.id} product={product} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Category;