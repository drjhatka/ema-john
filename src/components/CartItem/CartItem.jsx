import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CartItem = (props) => {
    console.log("Item",props)
    return (
<Row className='mb-4'>
            <Col md={6}>
                <img src={props.item.img} width={50} alt="" />
            </Col>
            <Col md={6}>
            <p>Quantity: </p>
            </Col>
        </Row>
        
    );
};

export default CartItem;