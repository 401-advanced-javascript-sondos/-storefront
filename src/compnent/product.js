import React from 'react';
import { connect } from 'react-redux';

import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

// import {reduceStock} from '../store/product';
import { addProduct } from '../store/cart'

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    fullHeight: {
        height: "100%"
    },
    card: {
        margin: '1em',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
    },
    jss8: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'initial'
    },
    jss5: {
        padding: '64px 0px 48px'
    },
    jss7: {
        paddingTop: '64px',
        paddingBottom: '64px'
    },
    // root: {
    //     maxWidth: 345,
    //   },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const Products = props => {
    const classes = useStyles();

    console.log('list', props.products)
    console.log('display', props.display)

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    if (props.display.length == 0) {
        return (

            <Container maxWidth="md" component="main">

                <Box className={classes.jss5} textAlign="center">
                    <Typography variant="h2" color="textPrimary">
                        {props.products.length > 0 ? props.products[0].category.toUpperCase() : ''}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        {props.products.length > 0 ? 'Category Description Goes Here' : ''}
                    </Typography>
                </Box>

                <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">
                    {props.products.map(product => (

                        <Grid className={classes.jss8} container item xs={12} sm={6} lg={4} >


                            <Card key={product.name} className={classes.card}>

                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="p" color="textSecondary">
                                        inventroy:  {product.inventory}
                                    </Typography>
                                </CardContent>



                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites" onClick={() => props.addProduct(product)}>
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                            minutes.
                                        </Typography>


                                    </CardContent>
                                </Collapse>



                                {/* <CardActions>
                                    <Button style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => props.addProduct(product)}>Add to Cart</Button>
                                </CardActions> */}
                            </Card>



                        </Grid>
                    ))}

                </Grid>
            </Container>

        )
    } else {
        return (

            <Container maxWidth="md" component="main">

                <Box className={classes.jss5} textAlign="center">
                    <Typography variant="h2" color="textPrimary">
                        {props.display.length > 0 ? props.products[0].category.toUpperCase() : ''}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        {props.display.length > 0 ? 'Category Description Goes Here' : ''}
                    </Typography>
                </Box>

                <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">
                    {props.display.map(product => (


                        <Grid className={classes.jss8} container item xs={12} sm={6} lg={4} >


                            <Card key={product.name} className={classes.card}>

                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardContent>

                                    <Typography variant="h5" color="textPrimary">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="p" color="textSecondary">
                                        inventory: {product.inventory}
                                    </Typography>
                                </CardContent>



                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites" onClick={() => props.addProduct(product)}>
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                            minutes.
                                        </Typography>


                                    </CardContent>
                                </Collapse>


{/* 
                                <CardActions>
                                    <Button style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => props.addProduct(product)}>Add to Cart</Button>
                                </CardActions> */}
                            </Card>



                        </Grid>
                    ))}

                </Grid>
            </Container>
        )
    }


};

const mapStateToProps = state => {
    return {
        products: state.products.products,
        display: state.products.display,
    }
};

const mapDispatchToProps = { addProduct };


// using connect to connect between the component and the stroe
export default connect(mapStateToProps, mapDispatchToProps)(Products);


