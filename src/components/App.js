import React, { Component } from "react"
import '../styles/App.css';
import Header from './Header'
import Form from "./Form"
import Footer from "./Footer"

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}


