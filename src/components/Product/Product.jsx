import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';

const Product = (props) => {
    const {id,name, seller, ratings, price, img}=props.product;
    return(
        <Col md={4} className="mb-4">
        <Card className='product-card'>
            <Image src={img}/> 
            <small>{id}</small>
            <h5>{name}</h5>
            <p>Price: {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <Button onClick={()=>{props.handler(props.product)}} style={{position:"absolute", bottom:"0", width:"90%"}}>Add To Cart</Button>

        </Card>
        </Col>
    )
};

export default Product;