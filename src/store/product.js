// State
let initalState = {

    products: [
        { count: 1, name: 'TV', category: 'electronics', price: 699.00, inventory: 5, image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { count: 1, name: 'Radio', category: 'electronics', price: 99.00, inventory: 15, image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { count: 1, name: 'Shirt', category: 'clothing', price: 9.00, inventory: 25, image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { count: 1, name: 'Socks', category: 'clothing', price: 12.00, inventory: 10, image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { count: 1, name: 'Apples', category: 'food', price: .99, inventory: 500, image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { count: 1, name: 'Eggs', category: 'food', price: 1.99, inventory: 12, image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { count: 1, name: 'Bread', category: 'food', price: 2.39, inventory: 90, image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
    ],
    display: [],
};


// reducer
export default (state = initalState, action) => {
    let { type, payload } = action;
    console.log('action', action);

    switch (type) {
        case 'ACTIVATE':
            let targetCategory = payload;
            // console.log('targetCategory', targetCategory)
            let display = state.products.filter(product => {
                // console.log('product.category',product.category)
                return product.category === targetCategory && product.inventory > 0;
            });
            // console.log('DISPLAY PRODS', display);
            return { ...state, display };

        case 'ADD':
            // let namE=product.name
            // if(payload.inventory==0)
            // return 'dispatch'
            console.log('payloadreduce', payload);
            let modify = state.products.map(item => {
                if (item.name == payload.name && item.inventory > 0) {
                    // item.inventory--;
                    console.log('inventoryproduct', item.inventory);
                }
                return item;
            })
            return {
                ...state, products: modify
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

