import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

import portrait from "../assets/profile_photo.JPG"
import {landingPage} from "../assets/texts.js"

class LandingPageContainer extends React.Component {
    render() {
        return (
            <Container id="landing-page">
                <Row>
                    <Col>
                        <Image id="portrait-img" fluid rounded src={portrait} alt="profile image here"></Image>
                    </Col>
                    <Col>
                        <h1>{landingPage.title}</h1>
                        <p>{landingPage.message}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LandingPageContainer