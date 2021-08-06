import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router';

class ModalPage extends Component {

    redirectToForm = (dog) => {
        this.props.history.push({
            pathname: "/form",
            state: dog
        });

    }

    render() {

        const { show, onClose, selectedDog: { name, description } } = this.props;

        return (
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={onClose} variant="secondary">Cerrar</Button>
                    <Button onClick={() => this.redirectToForm(this.props.selectedDog)}variant="primary">Adoptar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default withRouter(ModalPage)