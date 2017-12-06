import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCredentials, getAllAnimals } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BrowsingView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {},
        }
    }

    componentDidMount(){
        this.props.getUserCredentials();
        axios.get('/api/getallanimals')
        .then(animals => {
            this.props.getAllAnimals(animals.data);
        })
    }

    render() {
        // console.log('this.props', this.props)
        // console.log('this.state', this.state)
        return (
            <div className='BrowsingView'>
            <h1>BrowsingView</h1>
            {this.props.animals.map((animal, i) => {
            // map through products here to display all
            return (
              <div key={i}>
              
                <Link to={`/details/${animal.id}`} >
                  <img src={animal.img} alt={animal.name} />
                  <p>{animal.name}</p>
                  <p> animal id: {animal.id}</p>
                  <p>MORE ABOUT THIS PET</p>
                </Link>

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