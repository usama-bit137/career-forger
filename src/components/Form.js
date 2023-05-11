import React, { Component } from "react"
import "../styles/Form.css"

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.props.handleChange.bind(this); 
    }

    print = () => {
        console.log(this.props.item.firstName)
    }

    render() {
        return (
            <div className="form">
                <input 
                    type="text" 
                    placeholder="First Name" 
                    name="firstName" 
                    value={this.props.item.firstName} 
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName" 
                    value={this.props.item.lastName} 
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Phone Number"
                    name="phone" 
                    value={this.props.item.phone} 
                    onChange={this.handleChange}
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email" 
                    value={this.props.item.email} 
                    onChange={this.handleChange}
                />
                
                {/* <textarea placeholder="Profile"/>
                
                <fieldset>
                    <p>Education</p>
                    <input placeholder="Institution"/>
                    <input placeholder="Major"/>
                    <fieldset>
                        <p>Dates</p>
                        <label>
                            From <input type="date"/>
                        </label>
                        <label>
                            Until <input type="date"/>
                        </label>
                    </fieldset>
                    <textarea placeholder="Description"/>
                </fieldset>
                
                <fieldset>
                    <p>Work</p>
                    <input placeholder="Company"/>
                    <input placeholder="Major"/>
                    <fieldset>
                        <p>Dates</p>
                        <label>
                            From <input type="date"/>
                        </label>
                        <label>
                            Until <input type="date"/>
                        </label>  
                    </fieldset>
                    <textarea placeholder="Description"/>    
                </fieldset>
                
                <fieldset>
                    <p>Skills</p>
                    <input placeholder="Skill"/>
                </fieldset>
            
                <fieldset>
                    <p>References</p>
                    <input placeholder="Name"/>
                    <fieldset>
                        <label>
                            <input placeholder="Major" type="radio" value="Academic" name="referencetype"/>
                            Academic
                        </label>
                        <br/>
                        <label>
                            <input placeholder="Major" type="radio" value="Work" name="referencetype"/>
                            Work
                        </label>
                    </fieldset>
                    <fieldset>
                        <p>Dates</p>
                        <label>
                            From <input type="date"/>
                        </label>
                        <label>
                            Until <input type="date"/>
                        </label>  
                    </fieldset>
                    <textarea placeholder="Description"/>    
                </fieldset> */}
            </div>
        )
    }
}