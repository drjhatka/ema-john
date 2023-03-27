import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = (props) => {
    const {id, img}=props.product;
    return(<Col xs={12} sm={2} md={4} className="mb-2" >
        <Card>
            <img src={img} alt="" />
            <h6>{id}</h6>
        </Card>
    </Col>)
};

export default Product;