import React from "react";
import "./pageContainer.scss"

class PageContainer extends React.Component {
    render() {
        return (
            <div className={`page-container ${this.props.bgc}`}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer