import React, { Component } from "react";
import "../styles/Render.css"

export default class Render extends Component {
    constructor(props) {
        super(props)

        this.state = this.props
    }

    render() {
        return (
            <section className="cv-render">
                <h1 className="name">{this.props.personal.firstName} {this.props.personal.lastName}</h1>
                <span>
                    <h3 className="phone">
                        Phone: {this.props.personal.phone} 
                    </h3>
                    <h3> 
                        Email: {this.props.personal.email}
                    </h3>
                </span>
                <div className="description">
                    <h3>Profile</h3>
                    {this.props.personal.profile}
                </div>

                <h3>Education</h3>
                    <h4>{this.props.education.institution} <span className="education-major">{this.props.education.major}</span> </h4> 
                    <div className="dates">{this.props.education.start} - {this.props.education.end} </div>
                    <div className="description">{this.props.education.description}</div>
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