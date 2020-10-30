// State
let initalState = {

    productAddCart: [],
    count: 0,

};


// reducer
export default (state = initalState, action) => {
    let { type, payload } = action;
    //     console.log('action', action);
    //   console.log('carttt',state.productAddCart)

    switch (type) {
        case 'DeleteProduct':
            if (state.productAddCart.includes(payload)) {
                let modify = state.productAddCart.map(item => {
                    if (item.name == payload.name && item.inventory > 0) {
                        item.count++;
                        // item.inventory--;
                        // state.count++;
                        console.log('inventory cart count', item.count);
                    }
                    return item;
                })

                // return {productAddCart:state.productAddCart}
                return { ...state, productAddCart: modify }

            } else {
                state.count++;
                payload.inventory--
                return { productAddCart: [...state.productAddCart, payload], count: state.count }

            }
            break;

        
        let update = state.productAddCart.push(payload);
        return { ...state, update };


        case 'AddProduct':
            console.log('remove from cart',payload)

        let data=state.productAddCart.filter(item => item.name !== payload.name)
        console.log('remove from cart',data)
            // if(state.productAddCart.includes(payload)){
            // let modify = state.productAddCart.map(item => {
            //     if (item.name == payload.name) {
            //         item.count--;
            //         item.inventory++;
            //         console.log('inventory cart', item.count);
            //     }
            //     return item;
            // })

            // // return {productAddCart:state.productAddCart}
            // return { ...state, productAddCart: modify }
            return {
                ...state,
                productAddCart: data
            }

        //    }

        default:


            return state;
    }
}



// actions
export const addProduct = (product) => {
    return {
        type: 'ADD',
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: 'REMOVEPRO',
        payload: product
    }
}