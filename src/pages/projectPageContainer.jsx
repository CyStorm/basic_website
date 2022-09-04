import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProjectCard from "../components/project_card/projectCard";

class ProjectPageContainer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ProjectCard>

                        </ProjectCard>
                    </Col>

                    <Col>
                        <ProjectCard>
                            
                        </ProjectCard>
                    </Col>
                </Row>

                <Row>
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