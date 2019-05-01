import React from 'react';
import ProductItem from './ProductItem';
import products from '../JsonData/vschoolproducts';

function Products() {
    const productsList = products.map(function (item) {
        return <ProductItem key={item.id} id={item.id} name={item.name} price={item.price} description={item.description} />
    })
    return (
        <div className="product-panel-container">
            {productsList}
        </div>
    )
}

export default Products;