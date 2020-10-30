import React from 'react'
import { connect } from 'react-redux';
import { Link } from '@material-ui/core';
import './style.scss'

import { Grid, AppBar, CssBaseline, Toolbar, Typography  } from '@material-ui/core';

const Header=props=> {
    console.log('headerprops',props)
    return (
        <>            
        <CssBaseline />
        <AppBar position="static" elevation={0} className="MuiAppBar-root">
            <Toolbar className="">
                <Grid container justify="space-between" alignItems="center" >
                    <Typography variant="h4">OUR STORE</Typography>
                    <Link to='/cart' className="a" color="secondary" onClick="">
                    {/* <Typography variant="h6" color="white" className="cartNumber"> */}
                        Cart ({props.added.length})
                    {/* </Typography> */}
                </Link>  
                </Grid>
            </Toolbar>
        </AppBar>


        </>
    )
}


const mapStateToProps = state => {
    return {
      added: state.cart.productAddCart,
      count: state.cart.count
    }
  };
  
//   const mapDispatchToProps = { removeProduct };
  
  
  // using connect to connect between the component and the stroe
  export default connect(mapStateToProps)(Header);