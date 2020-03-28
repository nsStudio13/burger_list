import React from "react";
import Burger_menu from "./Burger/Burger_menu";


const Menu = props => {
    return (
        <div>
            {
                props.menu.map(burger_menu => {
                    return <Burger_menu
                        key={burger_menu.id}
                        name={burger_menu.name}
                        price={burger_menu.price}
                        // click={() => props.increaseAge(person.id)}
                        // change={(e) => props.changeName(e, person.id)}
                        // delete={() => props.deletePerson(person.id)}
                    />
                })
            }
        </div>
    )

};

export default Menu;