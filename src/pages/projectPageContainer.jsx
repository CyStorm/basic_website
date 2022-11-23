import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProjectCard from "../components/project_card/projectCard";
import "./pageLayouts.scss"
import {projectPage} from "../assets/texts.js"
class ProjectPageContainer extends React.Component {
    render() {
        return (
            <Container id="project-page">
                <Row className="outer-row">
                    <h1>{projectPage.title}</h1>
                </Row>
                <Row className="outer-row">
                    <Col>
                        <ProjectCard title={projectPage.projects.sc2.title} img={projectPage.projects.sc2.img} desc={projectPage.projects.sc2.desc}/>
                    </Col>

                    <Col>
                        <ProjectCard title={projectPage.projects.sc2.title} img={projectPage.projects.sc2.img} desc={projectPage.projects.sc2.desc}/>
                    </Col>
                </Row>

                <Row className="outer-row">
                    <Col>
                        <ProjectCard title={projectPage.projects.sc2.title} img={projectPage.projects.sc2.img} desc={projectPage.projects.sc2.desc}/>
                    </Col>
                    <Col>
                        <ProjectCard title={projectPage.projects.sc2.title} img={projectPage.projects.sc2.img} desc={projectPage.projects.sc2.desc}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProjectPageContainer