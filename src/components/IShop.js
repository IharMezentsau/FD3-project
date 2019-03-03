import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createStore from '../store';
const store = createStore();

import './IShop.scss';


import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
    root: {
        //display: 'flex',
        width: '100%',
    },
});

class IShop extends React.PureComponent {

    render() {
        const { classes } = this.props;
        return(
            <Provider store={store}>
                <div className={classes.root}>
                    <Header/>
                    <BrowserRouter>
                        <div>
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

