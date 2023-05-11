import React, { Component } from "react";
import "../styles/Render.css"

export default class Render extends Component {
    constructor(props) {
        super(props)

        this.state = this.props.item
    }

    render() {
        return (
            <section className="cv-render">
                <h1 className="first-name">{this.props.item.firstName} {this.props.item.lastName}</h1>
                <span>
                    <h3 className="phone">
                        Phone: {this.props.item.phone} 
                    </h3>
                    <h3> 
                        Email: {this.props.item.email}
                    </h3>
                </span>
                <div>
                    Profile
                </div>

                <h3>Education</h3>
                <ul>
                    <li></li>
                </ul>
                <h3>Work Experience</h3>
                <ul>
                    <li></li>
                </ul>
                <h3>Skills</h3>
                <ul>
                    <li></li>
                </ul>
                <h3>References</h3>
                <ul>
                    <li></li>
                </ul>
            </section>
        )
    }
}