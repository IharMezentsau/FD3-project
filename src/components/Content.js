import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import CardList from './CardList';
import GridItems from './GridItems';
import Home from './Home';


const styles = theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
});

import './Content.scss';
import Mobile from "./Product";

class Content extends React.Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    render() {
        return(

            <main className={classNames(this.props.classes.content)}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/:type/:prodid?" component={GridItems} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>

        );
    }

}

export default (withStyles(styles, { withTheme: true })(Content));
