import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/Product-card.component';
import selectCategoriesMap from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

const Category = () => {
    const {category} = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap);
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