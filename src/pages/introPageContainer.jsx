import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {introPage} from "../assets/texts.js"

class IntroPageContainer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1>{introPage.title}</h1>
                </Row>

                <Row>
                    <Col>
                        <p>
                            {introPage.left1}
                        </p>
                    </Col>
                    <Col>
                        <p>
                            {introPage.right1}
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>
                            {introPage.left2}
                        </p>
                    </Col>
                    <Col>
                        <p>
                            {introPage.right2}
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>
                            {introPage.left3}
                        </p>
                    </Col>
                    <Col>
                        <p>
                            {introPage.right3}
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default IntroPageContainer