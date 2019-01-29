import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import CardList from './CardList';
import GridItems from './GridItems';

import { switchMenuLeftOpen } from '../redux/switchMenuLeftOpen';

const drawerWidth = 240;

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
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

import './Content.scss';

class Content extends React.PureComponent {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        menuLeftOpen: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.props.dispatch( switchMenuLeftOpen(this.props.menuLeftOpen.isOpen) );
    }

    render() {
        const open = this.props.menuLeftOpen.isOpen;

        return(
            <main
                className={classNames(this.props.classes.content, {
                    [this.props.classes.contentShift]: open,
                })}
            >
                <div className={this.props.classes.drawerHeader} />
                <GridItems />
            </main>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        menuLeftOpen: state.menuLeftOpen,
    };
};

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Content));