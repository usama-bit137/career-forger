import React from "react";
import "../styles/Footer.css"
import github from "../icons/gitlogo.png"

export default function Footer () {
    return (
        <footer className="footer">
            <p className="footer-text"> 
                Created by Usama Aqeel. 
                <img 
                    className="git-logo"
                    src={github} 
                    alt="GitHib Logo" 
                    width="15px" 
                />
                <a 
                    className="git-link" 
                    href="https://github.com/usama-bit137"
                >
                usama-bit137
                </a>
            </p>
        </footer>
    )
}