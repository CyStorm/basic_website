import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class LandingPageContainer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>picture here</h1>
                    </Col>
                    <Col>
                        <h1>description here </h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LandingPageContainer