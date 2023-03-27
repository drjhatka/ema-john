import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product'

const Shop = () => {
    //load products
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
    <Row>
        {
        products.map(product=> <Product product={product} key={product.id}></Product>)
        }
    </Row>
    );
};

export default Shop;