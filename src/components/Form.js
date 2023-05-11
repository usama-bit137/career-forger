import React, { Component } from "react"
import "../styles/Form.css"

const formState = require("../cvState.json")
console.log(formState.firstName);
export default class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form">
                <input 
                    type="text"
                    placeholder="First Name"
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    type="text" 
                    placeholder="Phone Number"
                />
                <input
                    type="email" 
                    placeholder="Email"

                />
            </div>
        )
    }
}