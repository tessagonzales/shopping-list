import React from 'react'
import CartItem from './CartItem'

//no state.. use functional component
//calling props from app.js return
const CartItems = (props) => {
  //console.log('cart items', props)

  let listOfItems = props.cartItems.map((item, idx) => <CartItem key={idx} item={item} />)

  return(
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {//map() interate (from above) items here
          listOfItems}
      </div>
    </div>
  )
}

export default CartItems
