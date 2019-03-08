import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import GridItems from './GridItems';

import Home from './Home';
import Product from './Product';
import Basket from "./Basket";

const styles = theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
});

import './Content.scss';

class Content extends React.Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        let {classes} = this.props;

        return(
            <main className={classNames(classes.content)}>
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/basket" component={Basket} />
                    <Route exact path="/:type" component={GridItems} />
                    <Route path="/:type/:prodid" component={Product} />
                </Switch>
            </main>
        );
    }

}

export default (withStyles(styles, { withTheme: true })(Content));
