import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/categories.js';

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';


const categories = props => {
    return (
    
        <div>
            <h2>My Categories component.</h2>
            <ul>
                {props.list.categories.map((category, idx) => {
                    return <li onClick={() => props.activate(category.name)} key={idx}> {category.name} : {category.displayName}</li>
                })}

            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    list: state.categories
});

const mapDispatchToProps = { activate };

// using connect to connect between the component and the stroe
export default connect(mapStateToProps, mapDispatchToProps)(categories);