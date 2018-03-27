import React from 'react'
import CartItem from './CartItem'

const CartItems = (props) => {
  console.log('cart items', props)
  let itemsList = props.itemList.map(item => <CartItem key={item.id} item={item} />)
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
        {itemsList}
      </div>
    </div>
  )
}

export default CartItems
