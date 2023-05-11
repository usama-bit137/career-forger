import React, { Component } from "react"
import '../styles/App.css';
import Header from './Header'
import Form from "./Form"
import Render from "./Render";
import Footer from "./Footer"

const formState = require("../cvState.json")

export default class App extends Component {
  constructor() {
    super()

    this.state = formState;  
  }
  
  handleChange = (e) => {
    this.setState({
        ...this.state, 
        [e.target.name]: [e.target.value]
    })
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Form 
            item={this.state}
            handleChange={this.handleChange}
          />
          <Render
            item={this.state}
          />
        </div>
        <Footer />
      </>
    )
  }
}


