import React from 'react';
import "./Product.css";

export default function Product(props){
        return(
           
            <div>
            <img src={props.product.img} alt="" />
            <div>{props.product.name}</div>
            <div>Price: ${props.product.price}
            {}</div>
            </div>
        )
    }
