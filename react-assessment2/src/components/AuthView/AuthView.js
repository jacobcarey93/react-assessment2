import React, { Component } from 'react';
import './AuthView.css';

class AuthView extends Component {
    render() {
        return (
            <div className='App'>

                <div className='petmeet'>
                    <img src='https://github.com/Alan-Miller/animal-simulation/blob/master/assets/pm-petmeet.png?raw=true' alt='pet meet logo' className='logo'/>
                </div>

                <div className='the-other-half'>
                    <input value='new name' type='text' />
                    <input value='new url' type='text' />
                    <a href={process.env.REACT_APP_LOGIN}><button>login</button></a>
                </div>

            </div>
        )
    }
}

export default AuthView;