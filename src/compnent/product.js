import React from 'react';
import { connect } from 'react-redux';



const products = props => {
    console.log('list', props.products)
    console.log('display', props.display)
    if(props.display.length==0){
        return (


            <div>
                <h2>All products</h2>
                <ul>
                    <ul>
                        {props.products.map(product => {
                            return <li key={product.name}>{product.name}</li>;
                        })}
                    </ul>
                </ul>
            </div>
        )
    }else{
        return (


            <div>
                <h2>All products</h2>
                <ul>
                    <ul>
                        {props.display.map(product => {
                            console.log(product)

                            return <li key={product.name}>{product.name}</li>;
                        })}
                    </ul>
                </ul>
            </div>
        )
    }
    
  
};

const mapStateToProps = state => {
    return {
        products: state.products.products,
        display: state.products.display,
    }
};


// using connect to connect between the component and the stroe
export default connect(mapStateToProps)(products);