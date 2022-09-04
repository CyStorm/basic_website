import React from "react";
import "./navbar.scss"

import NavItem from "../navitem/navItem";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <NavItem link="#landing" displayText="Landing"></NavItem>
                    <NavItem link="#intro" displayText="Intro"></NavItem>
                    <NavItem link="#projects" displayText="Projects"></NavItem>
                    <NavItem link="#experience" displayText="Experience"></NavItem>
                    <NavItem link="#contact" displayText="Contact"></NavItem>
                </div>
                <div className="navbar-right">
                    <NavItem link="#" displayText="Icon"></NavItem>
                    <NavItem link="#" displayText="Icon"></NavItem>
                    <NavItem link="#" displayText="Icon"></NavItem>
                </div>
            </div>
        );
    }
}

export default Navbar
