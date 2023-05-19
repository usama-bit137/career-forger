import React, { Component } from "react"
import '../styles/App.css';
import Header from './Header'
import Form from "./Form"
import Render from "./Render";
import Footer from "./Footer"
import cvState from "../cvState.js"

export default class App extends Component {
  constructor() {
    super()

    this.state = cvState;  
  }
  
  handleChange = (e) => {
    const {name, value, parentElement} = e.target, 
          parentName = parentElement.name
    
    if (parentName === "education" || "work"){
      this.setState({
        ...this.state,
        [parentName]: {
          ...this.state[parentName],
          [name]: value
        } 
      })
    } else if (parentName === "personal") {
      this.setState({
          ...this.state, 
          [name]: value
      })
    }
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Header />
        
        <div className="container">
          <Form 
            personal={this.state.personal}
            education={this.state.education}
            handleChange={this.handleChange}
          />
          <Render
            personal={this.state.personal}
            education={this.state.education}
          />
        </div>
        <Footer />
      </>
    )
  }
}
