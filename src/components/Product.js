import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {

    const {data , AddToCart , isInCart} = props;
    return ( 
        <div className="product">
            <div className="box-img">
                <Link to={`/details/${data._id}`}>
                    <img src={data.img} alt="" />
                </Link>
            </div>
            <div className="product-details">
                <h3>{data.title}</h3>
                <h4>${data.price}</h4>
            </div>
            <div className="product-btn">
                <button onClick={AddToCart}>Add To Cart</button>
            </div>
            <div className={isInCart ? "inCart newInCart" : "inCart"}>
                <span>Already in Cart</span>
            </div>
        </div>
     );
}

export default Product;