import React from 'react';

const CartItem = ({item}) => {
    console.log("Item",item)
    return (
        <div>
            <img src={item.img} className="img img-thumbnail" alt="" />

        </div>
    );
};

export default CartItem;