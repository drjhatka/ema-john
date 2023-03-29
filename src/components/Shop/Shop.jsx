import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'

const Shop = () => {
    //LOAD PRODUCT DATA
    //use state hook to empty array
    const [products, setProducts] = useState([]);
    //use side effect to fetch data and set data to hook variable
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //STORE CART DATA INTO LOCAL STORAGE
    //initially the cart data is an empty array
    const [cart, setCart] = useState([]);
    const [storedCart, setStoredCart] = useState({});

    useEffect(() => {
        //check if cart data exists in local storage
    
        //if not.... set it to an empty object
        if (!localStorage.getItem("cart-data")) {
            localStorage.setItem('cart-data', JSON.stringify(storedCart))
        }
        //otherwise retrieve local storage ids and fetch the objects by those ids
        setStoredCart()
    })

    const handleCartClick = (product) => {
        const cartInStorage = JSON.parse(localStorage.getItem("cart-data"));

    //first check if the cart-data object is empty in local storage
        if (Object.keys(JSON.parse(localStorage.getItem("cart-data"))).length === 0) {
            const product_id=product.id;
            //add product to cart array of objects
            setCart([...cart,product])
            //push the product id and quantity in local storage
            localStorage.setItem("cart-data", JSON.stringify(Object.assign(cartInStorage, { [product_id] : 1 })));
            //console.log(cart)
        }

    //since the cart is not an empty object......
        else {
            //check if the product id exists in local storage
                if(idExists(product.id, cartInStorage)){
                    //increase by 1
                    cartInStorage[product.id]=cartInStorage[product.id]+1; 
                     
                }//end if 
                else{
                    //otherwise add the item to the cartInStorage
                    cartInStorage[product.id]=1;
                    //update cart state
                    setCart([...cart, product]);
                    // console.log(cart, cart.length)
                }//end else
            //store in local storage
            localStorage.setItem("cart-data",JSON.stringify(cartInStorage)) 
        }//end else
    }//end handler function 



    return (
        <Row>
            <Col md={9}>
                <Row>
                    {products.map(product => <Product product={product} key={product.id} handler={handleCartClick}></Product>)}
                </Row>
            </Col>

            <Cart cart={cart}></Cart>
        </Row>

    );
};


function idExists(id, obj){
    if (id in obj) {
        return true;
     }
    return false;
}

function fetchObjectsByIds(){
    
}

function fetchObjectByIdValue(idValue, productArray){
    console.log(idValue, productArray);
    productArray.find((product)=>idValue===product.id)
}
export default Shop;