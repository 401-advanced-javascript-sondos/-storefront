import axios from "axios";

// State
let initalState = {
    activeCategory: "Electronics",
    categories: [
        { name: 'electronics', displayName: 'Elecronics', description: 'smart-phone' },
        { name: 'food', displayName: 'Food', description: 'apple' },
        { name: 'clothing', displayName: 'Clothing', description: 'T-shirt' },
    ],

    
};


// reducer
export default (state = initalState, action) => {
    let { type, payload } = action;
    console.log('active cat', state.activeCategory)
    switch (type) {

        case 'ACTIVATE':
            // state.activeCategory = payload;
   
            return {
                ...state,
                activeCategory: payload
              }

        case ' GET_CATEGORIES':
            let categories = state.categories
            categories = payload
            // console.log('categories in get', payload)
            return { categories }

        default:
            return state;
    }
}

// actions
export const activate = (name) => {
    return {
        type: 'ACTIVATE',
        payload: name
    }
}

const getAction = payload => {
    return {
        type: ' GET_CATEGORIES',
        payload: payload
    }
}



export const getRemoteData = () => (dispatch) => {
    return axios.get(`http://api-testtt.herokuapp.com/api/v1/categories`)
    .then(data=> {
        console.log('data',data.data.result)
        dispatch(getAction(data.data.result));
    });
}
