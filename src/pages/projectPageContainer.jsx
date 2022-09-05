import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProjectCard from "../components/project_card/projectCard";
import "./pageLayouts.scss"

class ProjectPageContainer extends React.Component {
    render() {
        return (
            <Container id="project-page">
                <Row className="outer-row">
                    <h1>Projects</h1>
                </Row>
                <Row className="outer-row">
                    <Col>
                        <ProjectCard>

                        </ProjectCard>
                    </Col>

                    <Col>
                        <ProjectCard>
                            
                        </ProjectCard>
                    </Col>
                </Row>

                <Row className="outer-row">
                    <Col>
                        <ProjectCard>
                        
                        </ProjectCard>
                    </Col>
                    <Col>
                        <ProjectCard>

                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProjectPageContainer