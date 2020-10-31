import React from 'react';
import { connect } from 'react-redux';
import './style.scss'
import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, IconButton, ListItemText, ListItem, List, Button, Typography } from '@material-ui/core';
// import { Button } from '@material-ui/core';
import { Link } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { deleteProduct } from '../store/rtk/products'

import { deleteFromCart } from '../store/rtk/cart'
import { makeStyles } from '@material-ui/core/styles'
import { addProduct } from '../store/rtk/products'
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      background: '#f5f5f5',
      border: '1px solid #f5f5f5',
      listStyleType: 'none',
      margin: 0,
      padding: '1rem'
    },
  },
  'simpleCart': {
    fontSize: '1.25rem',
    position: 'fixed',
    top: '4.5rem',
    right: '1rem',
    width: '200px',
  }
}));


const CartMain = props => {
  console.log('hhhhhhhhhhhhhhe')
  console.log('propsin cart', props)
  const classes = useStyles();

  return (
    <>

      <Grid className={classes.simpleCart} item xs={4}>
        <Grid container justify="flex-end">

          <List>
            {props.cart.map(item =>
              <ListItem key={item.name}>
                <ListItemText primary={item.name} />
                <IconButton onClick={() => { props.deleteFromCart(item); props.addProduct(item) }}>
                  <HighlightOffIcon />
                </IconButton>
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>


    </>
  )
  //   }

};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    count: state.cart.count
  }
};

const mapDispatchToProps = { deleteFromCart, addProduct };


// using connect to connect between the component and the stroe
export default connect(mapStateToProps, mapDispatchToProps)(CartMain);