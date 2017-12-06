import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCredentials, getAllAnimals } from '../../ducks/reducer';
import axios from 'axios';
import AnimalTile from './AnimalTile/AnimalTile';
import './BrowsingView.css';

class BrowsingView extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUserCredentials();
        axios.get('/api/getallanimals')
            .then(animals => {
                this.props.getAllAnimals(animals.data);
            })
    }

    render() {
        console.log('this.props', this.props.userCredentials)

        return (
            <div className='BrowsingView'>
                <h1 className='super-cool-title'>BrowsingView</h1>
                {this.props.animals.map((animal, i) => {
                    return (
                        <div key={i}>
                            <AnimalTile
                                name={animal.name}
                                img={animal.img}
                                id={animal.id}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userCredentials: state.userCredentials,
        animals: state.animals
    }
}

const mapDispatchToProps = {
    getUserCredentials: getUserCredentials,
    getAllAnimals: getAllAnimals
}


export default connect(mapStateToProps, mapDispatchToProps)(BrowsingView);