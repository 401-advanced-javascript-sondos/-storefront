import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './categories';
import products from './product';

// when you have more than one reducer combine here everything
let reducers = combineReducers({categories,products});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();