// State
let initalState = {
 
    products: [
        { name: 'TV', category: 'electronics', price: 699.00, inventory : 5 },
        { name: 'Radio', category: 'electronics', price: 99.00, inventory : 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inventory : 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inventory : 10 },
        { name: 'Apples', category: 'food', price: .99, inventory : 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inventory : 12 },
        { name: 'Bread', category: 'food', price: 2.39, inventory : 90 },
    ],
    display:[],
};


// reducer
export default (state = initalState, action) => {
    let  {type,payload } = action;
console.log('action',action);
    switch (type) {
        case 'ACTIVATE':
            let targetCategory = payload;
            console.log('targetCategory',targetCategory)
           let  display = state.products.filter(product => {
                // console.log('product.category',product.category)
                
              return product.category === targetCategory;
            });
            console.log('DISPLAY PRODS', display);
            return  { ...state, display } ;
          default:
            

            return state;
    }
}


