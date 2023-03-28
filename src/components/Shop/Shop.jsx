import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'

const Shop = () => {
    //use state hook to empty array
    const [products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);

    
    const handleCartClick =(product)=>{
        //cart= [...cart, product];
        setCart([...cart, product]);
        console.log(cart)
    }
    //use side effect to fetch data and set data to hook variable
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
    <Row>
        <Col md={9}>
            <Row>
                {products.map(product=><Product product={product} key={product.id} handler={handleCartClick}></Product>)}
            </Row>
        </Col>
        
            <Cart cart={cart}></Cart>
        </Row>
        
    );
};

export default Shop;