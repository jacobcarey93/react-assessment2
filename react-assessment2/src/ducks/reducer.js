import axios from 'axios';

const initialState = {
    userCredentials: {},
    animals: [],
    animal: {},
    cart: []
}

const GET_USER_CREDENTIALS = 'GET_USER_CREDENTIALS';
const GET_ALL_ANIMALS = 'GET_ALL_ANIMALS';
const GET_ANIMAL = 'GET_ANIMAL';
const ADD_ANIMAL_TO_CART = 'ADD_ANIMAL_TO_CART';



export function getUserCredentials() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_CREDENTIALS,
        payload: userData
    }
}

export function getAllAnimals(val) {
    return {
        type: GET_ALL_ANIMALS,
        payload: val
    }
}

export function getAnimal(val) {
    return {
      type: GET_ANIMAL,
      payload: val
    }
  }
  
  export function addAnimalToCart(val) {
    return {
      type: ADD_ANIMAL_TO_CART,
      payload: val
    }
  }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_CREDENTIALS + '_FULFILLED':
            return Object.assign({}, state, { userCredentials: action.payload })
        case GET_ALL_ANIMALS:
            return Object.assign({}, state, { animals: action.payload });
        case GET_ANIMAL:
            return Object.assign({}, state, { animal: action.payload });
        case ADD_ANIMAL_TO_CART:
            const newCart = state.cart.slice();
            newCart.push(action.payload);
            return Object.assign({}, state, { cart: newCart });
        default:
            return state;
    }
}