import superagent from 'superagent';

// let api = 'http://api-testtt.herokuapp.com/api/v1/products';
let api='https://alhrthani-todos.herokuapp.com/api/v1/'
// action creator is a function that returns an object
// return a function from my action creator
export const getRemoteData = () => (dispatch) => {
    return superagent.get(`${api}/categories`).then(data=> {
        dispatch(getAction(data.body));
    });
}

export const getRemoteProduct = () => (dispatch) => {
    return superagent.get(`${api}/products`).then(data=> {
        dispatch(getAction(data.body));
    });
}




// export const putRemoteData = () => (dispatch) => {
//     return superagent.put(`${api}/${id}`).then(data=> {
//         dispatch(getAction(data.body));
//     });
// }

// export const getRemoteData = () => (dispatch) => {
//     return superagent.delete(api).then(data=> {
//         dispatch(getAction(data.body));
//     });
// }


// acton creator function 
const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}

const deleteAction = payload => {
    return {
        type: 'DELETE',
        payload: payload
    }
}
