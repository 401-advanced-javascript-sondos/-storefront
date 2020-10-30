import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categories from './categories';
import products from './product';
import cart from './cart.js'

// when you have more than one reducer combine here everything
let reducers = combineReducers({categories,products,cart});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();