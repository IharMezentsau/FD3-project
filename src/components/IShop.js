import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Header from "./Header";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import createStore from '../store';

const store = createStore();

import './IShop.scss';

const styles = ({
    root: {
        width: '100%',
    },
});

class IShop extends React.PureComponent {

    render() {
        const { classes } = this.props;
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div className={classes.root}>
                        <Header/>
                        <LeftMenu/>
                        <Content/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
};

export default withStyles(styles)(IShop);

