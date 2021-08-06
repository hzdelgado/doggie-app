import React, { Component } from 'react'
import Header from './Header'
import { Col } from 'react-bootstrap'

export default class ThankYouPage extends Component {
    render() {

        const { location: { state: { form, dog }}} = this.props;

        return (
            <div>
                <Col>
                    <Header />
                    <div className="form-body">
                        <h3>Gracias {form.fullName} por aplicar para la adopción de {dog.name} ! </h3>
                        <p>Te contactaremos a tu telefono {form.phoneNumber} en las proximas 24 hrs</p>

                    </div>
                </Col>
            </div>
        )
    }
}
