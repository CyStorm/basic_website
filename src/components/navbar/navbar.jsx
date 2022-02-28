import React from "react";
import "./navbar.scss"

import NavItem from "../navitem/navitem";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <NavItem displayText="Landing"></NavItem>
                    <NavItem displayText="Intro"></NavItem>
                    <NavItem displayText="Projects"></NavItem>
                    <NavItem displayText="Experience"></NavItem>
                    <NavItem displayText="Contact"></NavItem>
                </div>
                <div className="navbar-right">
                    <NavItem displayText="Icon"></NavItem>
                    <NavItem displayText="Icon"></NavItem>
                    <NavItem displayText="Icon"></NavItem>
                </div>
            </div>
        );
    }
}

export default Navbar
