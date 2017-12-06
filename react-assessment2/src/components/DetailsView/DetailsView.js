import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAnimal, addAnimalToCart } from '../../ducks/reducer';

class Details extends Component {

  componentWillMount() {
    const animalid = this.props.match.params.id; 

    axios.get(`/api/details/${animalid}`)
    .then(animal => {
      this.props.getAnimal(animal.data);
    });
  }

  addToCart(animal) {
    this.props.addAnimalToCart(animal);
  }

  render() {
    // console.log('this.props.match.params', this.props.match.params )
    console.log('this.props', this.props)
    const animal = this.props.animal;

    return (
      <div className="animal"> 
        <img alt={animal.name} src={animal.image} />
        <p>{animal.name}</p>
        <div onClick={() => this.addToCart(animal)}>Add to cart</div>
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {animal: state.animal};
}
const mapDispatchToProps = {
  getAnimal: getAnimal,
  addAnimalToCart: addAnimalToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);