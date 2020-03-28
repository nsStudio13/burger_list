import React from "react";
import "./Burger_menu.css"


const Burger_menu = props => {
    return (
        <div className="Burger_menu">
            <button className="Order_btn">
            <h2>{props.name}</h2>
            {/*<input*/}
            {/*    onChange={props.change}*/}
            {/*    type="text"*/}
            {/*    value={props.name}*/}
            {/*/>*/}
            <p> Price: {props.price}</p>

            {/*<button onClick={props.click}> Increase age </button>*/}
            {/*<button onClick={props.delete}>Delete</button>*/}
            </button>
        </div>
    )
};

export default Burger_menu;