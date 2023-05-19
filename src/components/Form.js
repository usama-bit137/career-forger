import React, { Component } from "react"
import Experience from "./Experience";
import "../styles/Form.css"

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.props.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        console.log("Somone tried to submit")
    }

    render() {
        return (
            <form className = "form" name="form" onSubmit={this.handleSubmit}> 
                <h1 className="call-to-action">Your Path to Professional Success Starts Here!</h1>
                <h4 className="call-to-action">Enter your details below:</h4>
                <p className="title">PERSONAL DETAILS</p>
                <form className="personal-form" name="personal">
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName" 
                        value={this.props.personal.firstName} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                        value={this.props.personal.lastName} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Phone Number"
                        name="phone" 
                        value={this.props.personal.phone} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        name="email" 
                        value={this.props.personal.email} 
                        onChange={this.handleChange}
                    />
                    
                    <textarea 
                        placeholder="Profile"
                        value={this.props.personal.profile}
                        name="profile"
                        onChange={this.handleChange}
                    />
                </form>
                <p className="title">EDUCATION</p>
                <form className="education-form">
                    <Experience 
                        parentName = "education"
                        place = "institution"
                        what = "major"
                        handleChange = {this.handleChange}
                        item = {this.props.education}
                    />
                </form>
                {/* <Experience 
                        parentName = "work"
                        place = "company"
                        what = "jobTitle"
                        handleChange = {this.handleChange}
                        item = {this.props.work}
                    /> */}
                    <button>Submit Template</button>
            </form>
        )
    }
}
