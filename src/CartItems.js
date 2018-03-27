import React from 'react'

const CartItems = (props) => {
  console.log('title props', props)
  return(
    <div className="container">
      <h1>{props.theTitle}</h1>
    </div>
  )
}

export default CartItems
