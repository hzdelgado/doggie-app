import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

export default class CardPage extends Component {
    render() {

        const { dog: { avatar, gender, name}, openModal } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name}/{gender}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary" onClick={() => openModal(this.props.dog)}>MORE INFO</Button>
                </Card.Body>
            </Card>
        )
    }
}
