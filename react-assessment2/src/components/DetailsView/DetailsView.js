import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAnimal, addAnimalToCart } from '../../ducks/reducer';

class Details extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            imgurl: ''
        }
        this.editAnimal = this.editAnimal.bind(this);
        this.deleteAnimal = this.deleteAnimal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        const animalid = this.props.match.params.id;

        axios.get(`/api/details/${animalid}`)
            .then(res => {
                console.log('hit! this is res.data', res.data)
                this.props.getAnimal(res.data[0]);
            });
    }

    deleteAnimal(){
        const animalid = this.props.match.params.id;
        
        axios.delete(`/api/delete/${animalid}`)
        .then(res => {
            alert('animal deleted!')
        })
    }

    editAnimal(){
        const data = {
            id: this.props.animal.id,
            name: this.state.name,
            img: this.state.imgurl

        }
        axios.put('/api/editanimal', data)
        .then(res => {
            alert('animal has been edited')
        })
    }

    handleChange(e, formfield) {
        this.setState({
            [formfield]: e
        })
    }

    render() {
        const animal = this.props.animal;
        console.log('this.props.animal.name', animal.name)

        return (
            <div>
                <div>
                    <img alt={animal.name} src={animal.img} />
                    <p>{animal.name}</p>
                    <input type='text' label='Animal Name' onChange={(e) => this.handleChange(e.target.value, 'name')}/>
                    <input type='text' label='Animal Image Url' onChange={(e) => this.handleChange(e.target.value, 'imgurl')}/>
                    <button onClick={() => this.editAnimal()}>Edit Animal</button>
                    <button onClick={() => this.deleteAnimal()}>Delete Animal</button>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return { animal: state.animal };
}
const mapDispatchToProps = {
    getAnimal: getAnimal,
    addAnimalToCart: addAnimalToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);