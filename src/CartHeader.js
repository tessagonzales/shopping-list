import React from 'react'

const CartHeader = (props) => {
  //console.log('header props', props)
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <p className="navbar-brand">{props.theHeader}</p>
    </nav>
  )
}

export default CartHeader
