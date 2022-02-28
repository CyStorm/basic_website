import React from "react";
import "./navitem.scss"

class NavItem extends React.Component {
    render() {
        return (
            <div className="navitem">
                <a href="#home">{this.props.displayText}</a>
                {/* <p>{this.props.displayText}</p> */}
            </div>
        )
    }
}

export default NavItem