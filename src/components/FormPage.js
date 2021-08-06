import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import Header from './Header'
import { createUserApi } from '../doggie-api'
import { withRouter } from 'react-router'

class FormPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            form: {
                fullName: "",
                email: "",
                phoneNumber: ""
            }
        }
    }

    onChange = (value, key) => {
        this.setState({
            form: { ...this.state.form, [key]: value }
        }, () => {
            console.log("form", this.state.form)
        })
    }

    onSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();

        createUserApi(this.state.form).then( (res) => {
            console.log()
            this.props.history.push({
                pathname: "/thankyou",
                state: {
                    dog: this.props.location.state,
                    form: this.state.form
                }
            })
        })


    }
    
    render() {
        console.log("dog", this.props.location.state)
        return (
            <Col>
            <Header/>
            <div className="form-body">
                <h4>Por favor ingresa tus datos para contartarte para la adopción :)</h4>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" onChange={(event) => this.onChange(event.target.value, "fullName")}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" onChange={(event) => this.onChange(event.target.value, "email")}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="number" onChange={(event) => this.onChange(event.target.value, "phoneNumber")}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar!
                    </Button>
                </Form>
            </div>
        </Col>
        )
    }
}

export default withRouter(FormPage)