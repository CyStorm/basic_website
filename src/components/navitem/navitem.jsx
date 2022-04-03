import React from "react";
import "./navItem.scss"

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