import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import CardList from './CardList';
import GridItems from './GridItems';
import Home from './Home';

import eventSwitchLeftMenu from "../modules/events";

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

class Content extends React.PureComponent {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    render() {
        return(
            <main
                className={classNames(this.props.classes.content)}
            >
                <div className={this.props.classes.drawerHeader} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mobiles" component={GridItems} />
                    <Route path="/mobile/:prodid" component={GridItems} />
                    <Route path="/notebooks" component={GridItems} />
                    <Route path="/notebook/:prodid" component={GridItems} />
                    <Route path="/contacts" component={GridItems} />
                </Switch>
            </main>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(Content));
