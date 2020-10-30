import React from 'react';
import { connect } from 'react-redux';
import './style.scss'
import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions,IconButton,ListItemText,ListItem,List, Button, Typography } from '@material-ui/core';
// import { Button } from '@material-ui/core';
import { Link } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {putProduct} from '../store/product'

import removeProduct from '../store/cart'
import { makeStyles } from '@material-ui/core/styles'

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

      {/* <Container maxWidth="md" component="main">

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
        </Container> */}


      <Grid className={classes.simpleCart} item xs={4}>
        <Grid container justify="flex-end">

          <List>
            {props.added.map(item =>
              <ListItem key={item.name}>
                <ListItemText primary={item.name} />
                <IconButton onClick={() =>props.putProduct(item)}>
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
    added: state.cart.productAddCart,
    count: state.cart.count
  }
};

const mapDispatchToProps = { putProduct };


// using connect to connect between the component and the stroe
export default connect(mapStateToProps, mapDispatchToProps)(CartMain);