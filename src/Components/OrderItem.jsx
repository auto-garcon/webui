import React from 'react'

export default function OrderItem(props) {
    const {
        comments,
        itemName,
        price,
        quantity,
        orderID
    } = props;

    return (
        <div className="OrderItem-Container">
            <h1>{comments}</h1>
            <h1>{itemName}</h1>
            <h1>{price}</h1>
            <h1>{quantity}</h1>
            <h1>{orderID}</h1>
        </div>
    )
}
