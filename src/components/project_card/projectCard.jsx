import React from "react";
import "./projectCard.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ProjectCard extends React.Component {
    render() {
        return (
            <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default ProjectCard