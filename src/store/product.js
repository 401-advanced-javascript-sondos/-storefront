// State
let initalState = {
 
    products: [
        { name: 'TV', category: 'electronics', price: 699.00, inventory : 5 ,image:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { name: 'Radio', category: 'electronics', price: 99.00, inventory : 15 ,image:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'},
        { name: 'Shirt', category: 'clothing', price: 9.00, inventory : 25,image:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { name: 'Socks', category: 'clothing', price: 12.00, inventory : 10 ,image:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'},
        { name: 'Apples', category: 'food', price: .99, inventory : 500 ,image:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'},
        { name: 'Eggs', category: 'food', price: 1.99, inventory : 12,image:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
        { name: 'Bread', category: 'food', price: 2.39, inventory : 90,image:'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' },
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


