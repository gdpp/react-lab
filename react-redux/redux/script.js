const redux = require('redux')

const createStore = redux.createStore()
const ORDER_PIZZA = 'ORDER_PIZZA'

// ACTION
// const action = {
//     type: ORDER_PIZZA,
//     shop_name: "EL Pequenio Neron"
// }

// ACTION CREATOR
function orderPizza(){
    return {
        type: ORDER_PIZZA,
        shop_name: "EL Pequenio Neron"
    }
}

// REDUCER
const initialState = {
    pizzaBase: 100,
    toppings: ['salami', 'pineapple']
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ORDER_PIZZA':
            return {
                ...state,
                pizzaBase: pizzaBase - 1
            }
        default:
            return state
    }
}

// STORE
// 1 - store needs to hold application state
const store = createStore(reducer)

// 2 - It exposes a method called getState which gives your application
// access to the current state in the store.
console.log('Initial state:', store.getState())

// 3 - Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

// 4 -Allows state to be updated via dispatch(action) 
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())

unsubscribe()