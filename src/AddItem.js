import React, { Component } from 'react'

//since we are using state.. must use Component class
class AddItem extends Component {
  //initiate "default" for state
  state = {
    quantity: 0,
    productId: 40,
  }

  //prevent refresh of page and ... addItemFunc()???
  handleSubmit = (event) => {
    event.preventDefault()
    //console.log('this.state', this.state)
    this.props.addItemFunc(this.state)
    //goes back to default after user submits
    this.setState({
      quantity: 0,
      productId: 40
    })
  }

  render() {
    //console.log('props in addItem', this.props);

    //iterate all product items to html select tab.. props called from app.js state
    let listOfProducts = this.props.products.map(product =>
    <option key={product.id} value={product.id}>{product.name}</option>)

    return(
      //handleSubmit function revert back to default state
      <form onSubmit = {this.handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="quantity-field">Quantity</label>
            <input
            type="text"
            className="form-control"
            id="quantity-field"
            aria-describedby="name"
            //event listener when user types in input.. sets state to user value
            onChange={(event) => this.setState({quantity:event.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-field">Product List</label>

            <select
             className='form-control'
             id='product-field'
             onChange = {
               //event listener when user selects product. sets state to user value
               event => this.setState({productId: event.target.value})
             }>
              {listOfProducts} //called variable from map() iteration
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default AddItem
