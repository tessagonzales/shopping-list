import React from 'react'

//no state, use functional component
//calling props from map() <CartItem key>
const CartItem = (props) => {
  //console.log('props in cart item', props)
  return (
    <div className="collection-item">
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{props.item.product.name}</div>
          <div className="col-md-2">${(props.item.product.priceInCents/100).toFixed(2)}</div>
          <div className="col-md-2">{props.item.quantity}</div>
        </div>
      </div>
   </div>
  )
}

export default CartItem
