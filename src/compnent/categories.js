import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/categories.js';

import { makeStyles } from '@material-ui/core/styles';
import { Box, ButtonGroup, Button, CssBaseline } from '@material-ui/core';



const useStyles = makeStyles({
    buttonCat: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: 10,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',

    },
    browseCategories:{
        padding: 4,
        margin: 4,
    },

});

const Categories = props => {
    const classes = useStyles();
    console.log(props)

    return (
        <>
            <CssBaseline />
            <Box>
                <h2 className={classes.browseCategories}>My Categories component.</h2>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <ul>
                        {props.list.categories.map((category, idx) => {
                            return <li key={idx}>
                                <Button className={classes.buttonCat} onClick={() => props.activate(category.name)} key={idx}>
                                    {category.name}
                                </Button>
                            : {category.displayName}
                            </li>
                        })}

                    </ul>
                </ButtonGroup>
            </Box>


        </>
    )
};

const mapStateToProps = state => ({
    list: state.categories
});

const mapDispatchToProps = { activate };

// using connect to connect between the component and the stroe
export default connect(mapStateToProps, mapDispatchToProps)(Categories);