import React from "react";
import "./projectCard.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ProjectCard extends React.Component {
    render() {
        return (
            <Card className="project-card">
                <Card.Img variant="top" src={this.props.img} alt="project image here"/>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        {this.props.desc}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProjectCard