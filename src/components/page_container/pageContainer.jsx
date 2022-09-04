import React from "react";
import "./pageContainer.scss"

class PageContainer extends React.Component {
    render() {
        return (
            <div id={this.props.id} className={`page-container ${this.props.bgc}`}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer