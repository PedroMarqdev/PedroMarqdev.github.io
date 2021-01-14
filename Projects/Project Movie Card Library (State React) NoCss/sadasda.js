import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [{title: "Joca", id: "xuxu"}, {title: "Jocat" ,id: "xuexu"}],
    }
    this.decreaseFunc = this.decreaseFunc.bind(this)
    this.increaseFunc = this.increaseFunc.bind(this)
  }

  componentDidMount() {
    this.state.products.forEach((element) => {
      this.setState({ [element.id]: 1 })
    })
  }

  decreaseFunc({target}){
    const { className } = target.parentElement
    if (this.state[className] === 0) return this.state
    this.setState((previousState) => ({
      [className]: previousState[className] - 1
    }))
  }

  increaseFunc({target}){
    const { className } = target.parentElement
    this.setState((previousState) => ({
      [className]: previousState[className] + 1
    }))
  }
  render() {
    const { products } = this.state
      if (products.length === 0) return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
     return (
        <div>
         {products.map((products) => {
            return (
              <div className={products.id}key={products.id}>
                <p data-testid='shopping-cart-product-name'>{products.title}</p>
                <p data-testid='shopping-cart-product-quantity'>{`Quantidade: ${this.state[products.id]}`}</p>
                <button data-testid='product-increase-quantity' onClick={this.increaseFunc}>+</button>
                <button data-testid='product-decreate-quantity' onClick={this.decreaseFunc}>-</button>
              </div>)})}
       </div>
     )}
}
