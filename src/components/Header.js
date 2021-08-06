import React, { Component } from 'react'
import WhitePawLogo from "../assets/dog-paw-white.png";

export default class Header extends Component {
    render() {
        return (
            <div className="title-container">
                    <div className="title">ADOPT A DOGGIE <img src={WhitePawLogo} alt="Logo" width="8%" /></div>
            </div>
        )
    }
}
