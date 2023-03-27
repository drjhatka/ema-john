import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Product/Product'

const Shop = () => {
    //use state hook to empty array
    const [products, setProducts]= useState([]);

    const handleCartClick =(product)=>{
        console.log("Added", product)
    }
    //use side effect to fetch data and set data to hook variable
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
   
        <Col xs={9} md={9} lg={9}>
            <Row>
                {
                products.map(product=> <Product product={product} key={product.id} handler={handleCartClick}></Product>)
                }
            </Row>
        </Col>
    
    );
};

export default Shop;