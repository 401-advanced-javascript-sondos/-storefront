import React from 'react';
import { connect } from 'react-redux';
import './style.scss'
import {Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
// import { Button } from '@material-ui/core';
import { Link } from '@material-ui/core';

import removeProduct from '../store/cart'



const CartMain = props => {
  console.log('hhhhhhhhhhhhhhe')
  console.log('propsin cart', props)


//   if (props.added.length == 0) {
//     return (
//       <>
//         <h2>SimpleCart</h2>
//         <h5>Cart is empty</h5>
//       </>
//     )
//   } else {
    return (
      <>

        <Container maxWidth="md" component="main">

        <div className='cartmain'>
            {props.added.map((product, idx) =>
                <div key={idx}>
                    <Link className="a" color="primary" >
                        {product.name}
                    </Link>
                    <Button className="remove" onClick={() => props.removeProduct(product.id)} >x</Button>
                </div>

            )}
        </div>
        </Container>


      </>
    )
//   }

};

const mapStateToProps = state => {
  return {
    added: state.cart.productAddCart,
    count: state.cart.count
  }
};

const mapDispatchToProps = { removeProduct };


// using connect to connect between the component and the stroe
export default connect(mapStateToProps,mapDispatchToProps)(CartMain);