import React from "react";
import "./Burger_menu.css"


const Burger_menu = props => {

        return (
            <div className="Burger_menu">
                <button className="Order_btn">
                <span>{props.category}</span>
                <h2>{props.name}</h2>
                <p> Price: {props.price}</p>
                </button>
              </div>
    )
};

export default Burger_menu;