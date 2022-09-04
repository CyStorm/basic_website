import React from "react";
import "./topitem.scss"

class Topitem extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="topitem">
                {this.props.displayText}
            </a>
        )
    }
}

export default Topitem