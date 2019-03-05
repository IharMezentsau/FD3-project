import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import createStore from '../store';
const store = createStore();

import './IShop.scss';


import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import { withStyles } from '@material-ui/core/styles';
import Home from "./Home";
import GridItems from "./GridItems";
import {eventOpenBasket} from "../modules/events";


const styles = () => ({
    root: {
        //display: 'flex',
        width: '100%',
    },
});

class IShop extends React.PureComponent {

    handleCloseBasket = () => {
        console.log('emit');
        eventOpenBasket.emit('EClosedBasket');
    };

    render() {
        const { classes } = this.props;
        return(
            <Provider store={store}>
                <div className={classes.root}>
                    <Header/>
                    <BrowserRouter>
                        <div onClick={this.handleCloseBasket}>
                            <LeftMenu/>
                            <Content/>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }

};
export default withStyles(styles, { withTheme: true })(IShop);

