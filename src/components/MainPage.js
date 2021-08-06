import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Header from './Header';
import { getDoggieApi } from '../doggie-api';
import BoardPage from './BoardPage';
import ModalPage from './ModalPage';

export default class MainPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             doggies:[],
             showModal: false,
             selectedDog: {}
        }
    }

    componentDidMount() {
        getDoggieApi().then(res => {
            this.setState({
                doggies: res
            })
        });
    }

    openModal = (dog) => {
        this.setState({
            selectedDog: dog,
            showModal: true
        });
    } 

    onClose = () => {
        this.setState({
            showModal: false
        })
    }
    
    render() {
        const { doggies, showModal, selectedDog } = this.state;
        return (
            <div>
            <Col>
            <Header/>
            <div className="content">
            <BoardPage doggies={doggies} openModal={this.openModal}/>
            </div>
            </Col>
            {
                showModal && <ModalPage show={showModal} onClose={this.onClose} selectedDog={selectedDog}/>
            }
            </div>
        )
    }
}
