import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      productName: "",
      price: 0
    };
  }

  //methods
  createProduct = () => {
    const newProduct = {
      name: this.state.productName,
      price: this.state.price,
      img: this.state.imageUrl
    };
    axios
      .post("/api/inventory", newProduct)
      .then(response => {
        this.setState({
          inventory: response.data
        });
      })
      .catch(err => console.log(err));
  };

  resetForm = () => {
    this.setState({
      imageUrl: "",
      productName: "",
      price: 0
    });
    console.log(this.state);
  };
  //change handlers
  imageChangeHandler = event => {
    this.setState({
      imageUrl: event.target.value
    });
    console.log(this.state.imageUrl);
  };
  productChangeHandler = event => {
    this.setState({
      productName: event.target.value
    });
    console.log(this.state.productName);
  };
  priceChangeHandler = event => {
    this.setState({
      price: event.target.value
    });
    console.log(this.state.price);
  };
  // onclick method combining post/get

  onClick = event => {
    this.createProduct();
    this.props.getInventoryFn();
  };

  render() {
    const { imageUrl, productName, price } = this.state;

    return (
      <div className="Form-container">
        <div className="Input-container">
          <input
            onChange={this.imageChangeHandler}
            value={imageUrl}
            placeholder="Image URL"
          />

          <input
            onChange={this.productChangeHandler}
            value={productName}
            placeholder="Product Name"
          />

          <input
            type="number"
            onChange={this.priceChangeHandler}
            value={price}
            placeholder="Product Name"
          />
        </div>

        <button onClick={(event) => {this.createProduct(); this.props.getInventoryFn(event)}}>Add to Inventory</button>
        <button onClick={this.resetForm}>Cancel</button>
        <button onClick={this.props.getInventoryFn}>Test Get Function</button>
      </div>
    );
  }
}
