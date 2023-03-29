import React from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';
import CartItem from '../CartItem/CartItem';
import "./Cart.css";

const Cart = (props) => {
    // let totalCost= 0;
    // let totalShipping=0;
    
    // for (const product of props.cart) {
    //     totalCost += product.price;
    //     totalShipping += product.shipping;
        
    // }
    // let totalTax=totalCost*7/100;
    // let grandTotal=totalCost+totalShipping+totalTax;
console.log("cart",props.cart)
    return (
        <>
             
            <Col className='cart_container'>
                <Row>
                    <Col>
                    <h3>{props.cart.length}</h3>
                        {props.cart.map(item=>{ 
                           return  <CartItem item={item} key={item.ratingsCount}></CartItem>
                        })}
                    </Col>
                    {/* <Col xs={12}>
                        <h5 className='cart_title'>Cart Items</h5>
                        <p>Items Selected: {props.cart.length}</p>
                        <p>Total Price: {totalCost}</p>
                        <p>Total Shipping: {totalShipping}</p>
                        <p>Tax: {totalTax}</p>
                        <p>Grand Total: {grandTotal}</p>
                    </Col> */}
                </Row>
               
            </Col>
        </>
    );
};

export default Cart;