import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/StayCurrentPortrait';

import { switchMenuLeftOpen } from '../redux/switchMenuLeftOpen';

import './LeftMenu.scss';

const drawerWidth = 240,
    styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
});

class LeftMenu extends React.PureComponent {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        menuLeftOpen: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.props.dispatch( switchMenuLeftOpen(this.props.menuLeftOpen.isOpen) );
    }

    handleDrawerClose = () => {
        this.props.dispatch( switchMenuLeftOpen(false) );
    };

    render() {

        const open = this.props.menuLeftOpen.isOpen;

        return(
            <Drawer
                className={this.props.classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: this.props.classes.drawerPaper,
                }}
            >
                <div className={this.props.classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key='key-MobilePhones'>
                        <ListItemIcon><PhoneIcon /></ListItemIcon>
                        <ListItemText primary='Mobile Phones' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        menuLeftOpen: state.menuLeftOpen,
    };
};

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(LeftMenu));
