import axios from 'axios';

import { createSlice } from "@reduxjs/toolkit";

const productsSl = createSlice({
    name: "products",
    initialState: {
        products: [],
        current: {},

    },

    reducers: {

        getProducts(state, action) {
            console.log('payload getpro', action)
            state.products = action.payload;
            // state.activeCategory = action.payload[0].name


        },

        getOne(state, action) {
            console.log('one',action)
            state.current = action.payload;

        },

        add(state, action) {

            console.log('payload add  pro', action)
            let modify = state.products.map(item => {
                if (item.name == action.payload.name) {
                    item.inStock++;
                    console.log('item', item);
                }
                return item;
            })

            state.products = modify;
        },
        remove(state, action) {
            console.log('payload remove  pro', action)

            let modify = state.products.map(item => {
                if (item.name == action.payload.name && item.inStock > 0 && action.payload.inStock > 0) {
                    item.inStock--;
                }
                return item;
            })

            state.products = modify;

        }
    },
});


export const { getProducts, getOne, remove, add } = productsSl.actions;


export const getProductslink = () => (dispatch) => {
    return axios.get(`http://api-testtt.herokuapp.com/api/v1/products`)
        .then(data => {
            console.log('data', data.data.result)
            dispatch(getProducts(data.data.result));
        });
};

export const getOnePro = (id) => (dispatch) => {
    return axios.get(`http://api-testtt.herokuapp.com/api/v1/products/${id}`)
        .then(data => {
            console.log('data', data.data[0])
            dispatch(getOne(data.data[0]));
        });
};


export const deleteProduct = (product) => {

    return async dispatch => {

        // if (product.inStock > 0) {

        // product.inStock--;
        axios({
            method: "put",
            url: `https://ash-todolist.herokuapp.com/products/${product._id}`,
            data: {
                inStock: product.inStock > 0 ? product.inStock - 1 : product.inStock,
            },

        }).then(data => {
            console.log('remove data', data);

            dispatch(remove(product))
        });
    }
        ;
    // };
};


export const addProduct = product => {
    return async dispatch => {
        if (product.inStock > 0) {
            // product.inStock++;
            axios({
                method: "put",
                url: `https://ash-todolist.herokuapp.com/products/${product._id}`,
                data: {
                    inStock: product.inStock + 1,
                },

            }).then(data => {
                console.log('delete', data)
                dispatch(add(product))
            })
        }

    };
};


export default productsSl.reducer;
