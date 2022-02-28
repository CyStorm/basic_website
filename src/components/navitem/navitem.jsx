import React from "react";
import "./navitem.scss"

class NavItem extends React.Component {
    render() {
        return (
            <a href="#home" className="navitem">
                {this.props.displayText}
            </a>
        )
    }
}

export default NavItem