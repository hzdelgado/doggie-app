import React, { Component } from 'react';
import CardPage from './CardPage';


export default class BoardPage extends Component {

    render() {
        const { doggies, openModal } = this.props;
        return (
            <div className="dog-container">
                {
                    doggies.map(dog => (
                        <CardPage dog={dog} openModal={openModal}/>
                    ))
                }
                
            </div>
        )
    }
}
