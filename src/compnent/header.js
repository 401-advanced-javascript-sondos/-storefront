import React from 'react'
import { connect } from 'react-redux';
import { Link } from '@material-ui/core';
import './style.scss'

import { Grid, AppBar, CssBaseline, Toolbar, Typography, Button } from '@material-ui/core';

const Header = props => {
    console.log('headerprops', props)
    return (
        <>
            <CssBaseline />
            <AppBar position="static" elevation={0} className="MuiAppBar-root">
                <Toolbar className="">
                    <Grid container justify="space-between" alignItems="center" >

                        <Typography variant="h4">

                            {/* <Link to='/' > */}
                                <Button component={Link} to='/'>   OUR STORE</Button>
                            {/* </Link> */}
                        </Typography>

                        <Typography variant="h6" color="white" className="cartNumber">
                            {/* <Link to='/checkout' > */}
                                <Button to='/checkout' component={Link}  > Cart ({props.added.length})</Button>
                            {/* </Link> */}
                        </Typography>

                    </Grid>
                </Toolbar>
            </AppBar>


        </>
    )
}


const mapStateToProps = state => {
    return {
        added: state.cart.cart,
        count: state.cart.cartCount
    }
};



// using connect to connect between the component and the stroe
export default connect(mapStateToProps)(Header);





