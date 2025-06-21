const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware;

const createStore = redux.createStore()

const ORDER_PIZZA = 'ORDER_PIZZA'
const ORDER_BURGER = 'ORDER_BURGER'

// ACTION CREATOR
function orderPizza(){
    return {
        type: ORDER_PIZZA
    }
}

function orderBurger(){
    return {
        type: ORDER_BURGER
    }
}

// REDUCER
const initialState = {
    pizzaBase: 100,
    burgerBuns: 200
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state,
                pizzaBase: state.pizzaBase - 1
            }
        case ORDER_BURGER:
            return {
                ...state,
                burgerBuns: state.burgerBuns - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log('Initial state:', store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderBurger())
store.dispatch(orderBurger())
store.dispatch(orderBurger())
store.dispatch(orderBurger())
store.dispatch(orderBurger())

unsubscribe()