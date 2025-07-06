import {createStore} from 'redux';
import pizzaReducer from './pizza/PizzaReducer';

const store = createStore(pizzaReducer)

export default store;
