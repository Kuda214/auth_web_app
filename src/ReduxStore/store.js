import { createStore } from 'redux';

const initialState = {
  email: '',
  password: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
export function setEmail(email) {
    return { type: 'SET_EMAIL', payload: email };
  }
  
  export function setPassword(password) {
    return { type: 'SET_PASSWORD', payload: password };
  }