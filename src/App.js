import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

class App extends Component {
  render() {
    let copyrightYear = 2018
    let header = 'Shopping Cart'
    let title = 'Cart Items'
    return (
      <div className="App">
        <CartHeader theHeader={header} />
        <CartItems theTitle={title}/>
        <CartFooter theYear={copyrightYear} />
      </div>
    );
  }
}

export default App;
