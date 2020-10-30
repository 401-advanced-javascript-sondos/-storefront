import axios from 'axios';
import { put } from 'superagent';
import product from '../compnent/product';

// State
let initalState = {

    products: [],
    display: [],
};


// reducer
export default (state = initalState, action) => {
    let { type, payload } = action;
    console.log('action', action);

    switch (type) {
        case 'ACTIVATE':
            let targetCategory = payload;
            console.log('targetCategory', state.categories)
            let display = state.products.filter(product => {
                // console.log('product.category',product.category)
                return product.category === targetCategory && product.inStock > 0;
            });
            console.log('DISPLAY PRODS', display);
            return { ...state, display };

        // case 'ADD':
        //     // let namE=product.name
        //     // if(payload.inventory==0)
        //     // return 'dispatch'
        //     console.log('payloadreduce', payload);
        //     let modify = state.products.map(item => {
        //         if (item.name == payload.name && item.inStock > 0) {
        //             item.inStock--;
        //             console.log('inventoryproduct', item.inventory);
        //         }
        //         return item;
        //     })
        //     return {
        //         ...state, products: modify
        //     }



        case 'AddProduct':
            // console.log('payloadreduce', payload);
            // let modify = state.products.map(item => {
            //     if (item.name == payload.name && item.inStock > 0) {
            //         item.inStock--;
            //         console.log('inventoryproduct', item.inventory);
            //     }
            //     return item;
            // })
            // return {
            //     ...state, products: modify
            // }


            return {
                ...state, products: state.products.map(product => {
                    if (product._id === payload._id) {
                        return payload;
                    }
                    return product;
                })
            }


        case 'REMOVEPRO':

            // if (state.productAddCart.includes(payload)) {
            console.log('payloadreduce', payload);

        // let edit = state.productAddCart.map(item => {
        //     if (item.name == payload.name) {
        //         // item.count--;
        //         // item.inventory++;
        //         console.log('inventory cart', item.count);
        //     }
        //     return item;
        // })

        // // return {productAddCart:state.productAddCart}
        // return { ...state, productAddCart: edit }

        // }

        case 'GET':
            console.log('getproducts', payload)
            return { ...state, products: payload };



        case 'AddProduct':
            let update = state.products.map(item => {
                if (item.name == payload.name  ) {
                    // item.inStock--;
                    console.log('item', item);
                }
                return item;
            })
            return {
                ...state, products: update
            }



        case 'DeleteProduct':


            let modify = state.products.map(item => {
                if (item.name == payload.name && item.inStock > 0 && product.inStock>0 ) {
                    // item.inStock--;
                    console.log('inventoryproduct', item);
                }
                return item;
            })
            return {
                ...state, products: modify
            }

        default:


            return state;
    }
}



// actions
// export const reduceStock = (name) => {
//     return {
//         type: 'REDUCE',
//         payload: name
//     }
// }

const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

// const deleteAction = payload => {
//     return {
//         type: 'DeleteProduct',
//         payload: payload
//     }
// }

// const putAction = product => {
//     return {
//         type: 'AddProduct',
//         payload: product
//     }
// }


export const getProducts = () => (dispatch) => {
    return axios.get(`http://api-testtt.herokuapp.com/api/v1/products`)
        .then(data => {
            console.log('data', data.data.result)
            dispatch(getAction(data.data.result));
        });
};




export const putProduct = (product) => {

    return async dispatch => {
     
        // if (product.inStock > 0) {

            product.inStock++;
            axios({
                method: "put",
                url: `https://ash-todolist.herokuapp.com/products/${product._id}`,
                data: {
                    inStock: product.inStock +1 ,
                },
    
            }).then(data => {
                console.log('putdata', data);

                dispatch({
                    type: 'AddProduct',
                    payload: product,
                })
            });
        }
        ;
    // };
};


export const deleteProduct = product => {


    return async dispatch => {
        if (product.inStock > 0) {
        product.inStock--;
        axios({

            method: "put",
            url: `https://ash-todolist.herokuapp.com/products/${product._id}`,

            data: {
                inStock: product.inStock > 0 ? product.inStock - 1 : product.inStock,
            },

        }).then(data => {
            console.log('delete', data)
            dispatch({
                type: 'DeleteProduct',
                payload: product,
            });
        })
    }

    };
};

