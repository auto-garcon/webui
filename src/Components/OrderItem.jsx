import React from 'react'

export default function OrderItem(props) {
    const {
        comments,
        itemName,
        price,
        orderID,
    } = props;

    return (
        <div className="OrderItem-Container">
            <h3 className="OrderItemLabel" id="OrderID">OrderID: #{orderID}</h3>
            <h3 className="OrderItemLabel" id="ItemName">Item: {itemName}</h3>
            
                {comments === '' ? 
                    (null
                    ) :(
                    <h4 className="OrderItemLabel" id="ItemComments">
                        Comments: {comments})
                    </h4>
                    )
                }
                
            <h4 className="OrderItemLabel" id="ItemPrice">Price: ${price.toFixed(2)}</h4>
        </div>
    )
}
