import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    axios.get("/api/inventory")
    .then(response => {
      this.setState({
        inventory: response.data
      })
    })
    .catch(err => console.log(err))
  }


  render() {

    const { inventory } = this.state;

    return (
      <div className="App">
        <Header />
        <Form getInventoryFn={this.getInventory}/>
        <Dashboard inventory={inventory} />
      </div>
    );
  }
}

export default App;
