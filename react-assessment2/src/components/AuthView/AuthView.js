import React, { Component } from 'react';
import './AuthView.css';

class AuthView extends Component {
    render() {
        return (
            <div className='App'>  
                <a href={ process.env.REACT_APP_LOGIN }><button>login</button></a>
            </div> 
        )
    }
}

export default AuthView;