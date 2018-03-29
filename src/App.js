import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'

//state = use component class
class App extends Component {

  //do not need to put state in constructor app
  state = {
    items: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products : [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
    ]
  }

  //adding new item
  addItem = (newItem) => {
    //console.log not working?
    //console.log('filter all', this.state.product.filter(product => product.id == newItem.productId));
    this.setState({
      // join/concat new items to state.items
      items:this.state.items.concat({
      quantity: newItem.quantity,
      //product: grabbing that product object (look state items for refer)
      //filter() seeing if the product id matches the newitem product, if so is adding said product
      product: this.state.products.filter(product => product.id == newItem.productId)[0]
    })
    })
}


  render() {
    let copyrightYear = 2018
    let header = 'Shopping Cart'

    return (

      <div className="App">
        <CartHeader theHeader={header} />
        <CartItems cartItems={this.state.items}  />
        < //additem function recognized in handleSubmit in AddItem.js
        AddItem products={this.state.products} addItemFunc={this.addItem}/>
        <CartFooter theYear={copyrightYear} />
      </div>
    );
  }
}

export default App;
