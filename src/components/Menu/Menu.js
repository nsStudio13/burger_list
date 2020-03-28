import React from "react";
import Burger_menu from "./Burger/Burger_menu";



const Menu = props => {

    return (
        <div className="menu_block">
            <h1> MENU ITEMS </h1>

            {
                props.menu.map(burger_menu => {
                    return <Burger_menu
                        key={burger_menu.id}
                        name={burger_menu.name}
                        price={burger_menu.price}
                        category={burger_menu.category}
                        />
                })
            }
        </div>
    )

};

export default Menu;