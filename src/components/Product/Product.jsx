import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';

const Product = (props) => {
    const {id,name, seller, ratings, price, img}=props.product;
    return(<Col  xs={12} sm={2} md={4} className="mb-2" >
        <Card className='product-card'>
            <Image src={img}/> 
            
            <h5>{name}</h5>
            <p>Price: {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <Button style={{position:"absolute", bottom:"0", width:"90%"}}>Add To Cart</Button>

        </Card>
    </Col>)
};

export default Product;