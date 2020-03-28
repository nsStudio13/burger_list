import React, {Component} from 'react';
import './App.css';
import Header from "../components/Header/Header";
import uuid from 'uuid';
import Burger_menu from "../components/Menu/Burger/Burger_menu";
import Menu from "../components/Menu/Menu";


  class App extends Component {
      state = {
          menu: [
              {name: "Hamburger", price: 200, id: uuid()},
              {name: "Doner", price: 300, id: uuid()},
              {name: "Plov", price: 400, id: 3},
              {name: "Tea", price: 50, id: uuid()},
              {name: "Coffee", price: 200, id: uuid()},
              {name: "Cola", price: 100, id: uuid()}
          ]


      };


    render() {
      return (
          <div className="App">
          <Header/>

             <Menu
             menu={ this.state.menu}
             />
          </div>
      );
    }
    }

export default App;
