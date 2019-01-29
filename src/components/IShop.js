import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import combinedReducer from '../redux/reducers.js';

let store=createStore(combinedReducer);

import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Content from "./Content";

import './IShop.scss';

const styles = theme => ({
    root: {
        display: 'flex',
    },
});

class IShop extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    render() {
        return(
            <Provider store={store}>
                <div className={this.props.classes.root}>
                    <Header />
                    <LeftMenu/>
                    <Content/>
                </div>
            </Provider>
        )
    }
};

export default withStyles(styles, { withTheme: true })(IShop);