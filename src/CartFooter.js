import React from 'react'

const CartFooter = (props) => {
  //console.log('footer props', props)
  return(
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand">&copy; {props.theYear}</a>
    </nav>
)
}

export default CartFooter
