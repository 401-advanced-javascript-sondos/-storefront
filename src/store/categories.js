// State
let initalState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics', description: 'smart-phone' },
        { name: 'food', displayName: 'Food', description: 'apple' },
        { name: 'clothing', displayName: 'Clothing', description: 'T-shirt' },
    ],
     products: [
        { name: 'TV', category: 'electronics', price: 699.00, inventory : 5 },
        { name: 'Radio', category: 'electronics', price: 99.00, inventory : 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inventory : 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inventory : 10 },
        { name: 'Apples', category: 'food', price: .99, inventory : 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inventory : 12 },
        { name: 'Bread', category: 'food', price: 2.39, inventory : 90 },
    ],

    activeCategory: 'electronics',
};


// reducer
export default (state = initalState, action) => {
    let { type, payload } = action;
    
    switch (type) {

        case 'ACTIVATE':
            state.activeCategory = payload;
            console.log('active cat',state.activeCategory)
            return { categories: state.categories, products: state.categories, activeCategory: state.activeCategory }

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
