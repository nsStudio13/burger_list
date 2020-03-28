import React from "react";
import Order from "./Order/Order";


const OrderCart = props => {
    return (
        {
            props.Order.map(order => {
                return <Order
                    content={order.content}
                    />
            })
        }
    )
}
export default class OrderCart {
}