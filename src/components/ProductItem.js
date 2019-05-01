import React from 'react';

function ProductItem(props) { 
    return (
        <div className="product-panel">
            <h2>{props.name}</h2>
            <p className="discription">{props.description}</p>
            <div className="btn-box">
                <p className="price">{props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                <a href="" className={props.price ? "active" : "disabled"}>BuyNow</a>
            </div>
            
        </div>
    )
}

export default ProductItem;