import React, { Component } from "react";
import icon from "../icons/cv-image.png"
import "../styles/Header.css"

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <img 
                    src={icon} width="50px"
                    alt="Career Forge Logo"
                />
                <section className="header--title">
                    CareerForge
                </section>
                <p>
                    React Project by Usama Aqeel
                </p>
            </header>
        )
    }
}