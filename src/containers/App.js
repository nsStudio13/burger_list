import React, {Component} from 'react';
import './App.css';
import Header from "../components/Header/Header";
import uuid from 'uuid';
import Menu from "../components/Menu/Menu";
import OrderCart from "../components/OrderCart/OrderCart"


  class App extends Component {
      https;
      state = {

          menu: [
              {name: "Hamburger", price: 200, category: 1, id: uuid()},
              {name: "Doner", price: 300, category: 1, id: uuid()},
              {name: "Plov", price: 400, category: 1, id: 3},
              {name: "Tea", price: 50, category: 2, id: uuid()},
              {name: "Coffee", price: 200, category: 2, id: uuid()},
              {name: "Cola", price: 100, category: 2, id: uuid()}
          ],
          order: [
              {content: "Order is empty! Please, add your choice"}
          ]
      };

      // printPhoto = (category) => {
      //     const menu = [...this.state.menu];
      //     const cat = menu.findIndex(m => m.category === category);
      //     menu.
      //     this.setState({people});
      // }



    render() {
      return (
          <div className="App">
          <Header/>
              {/* eslint-disable-next-line react/jsx-no-undef */}
             <OrderCart
                 order={this.state.order}
             />
             <Menu
             menu={this.state.menu}
             />
          </div>
      );
    }
    }

export default App;
