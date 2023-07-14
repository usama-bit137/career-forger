import React from "react";
import icon from "../icons/cv-image.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img src={icon} width="50px" alt="Career Forge Logo" />
      <section className="header--title">CareerForge</section>
    </header>
  );
}
