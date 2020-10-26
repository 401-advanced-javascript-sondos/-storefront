import React from 'react'

import { Grid, AppBar, CssBaseline, Toolbar, Typography  } from '@material-ui/core';
export default function Header() {
    return (
        <>            
        <CssBaseline />
        <AppBar position="static" elevation={0} className="MuiAppBar-root">
            <Toolbar className="">
                <Grid container justify="space-between" alignItems="center" >
                    <Typography variant="h4">OUR STORE</Typography>
                    <Typography variant="h6">Cart (0)</Typography>
                </Grid>
            </Toolbar>
        </AppBar>
        </>
    )
}