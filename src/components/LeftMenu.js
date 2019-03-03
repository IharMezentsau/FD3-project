import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/StayCurrentPortrait';
import NotebookIcon from '@material-ui/icons/Laptop';
import ContactIcon from '@material-ui/icons/Contacts';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';


import Catalog from './Catalog';
import Filter from './Filter';

import './LeftMenu.scss';
import eventSwitchLeftMenu from "../modules/events";

const drawerWidth = 240,
    styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
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
        theme: PropTypes.object,
    };

    state = {
        value: 0,
        isOpenLeftMenu: false,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    componentDidMount() {
        eventSwitchLeftMenu.addListener('ESetOpenLeftMenu', this.setIsOpenLeftMenu);
    };

    componentWillUnmount() {
        eventSwitchLeftMenu.removeListener('ESetOpenLeftMenu', this.setIsOpenLeftMenu);
    };

    handleDrawerClose = () => {
        const isOpen = false;
        eventSwitchLeftMenu.emit('ESetClosedLeftMenu', isOpen);
        this.setIsOpenLeftMenu(isOpen);
    };

    setIsOpenLeftMenu = (isOpen) => {
        this.setState({isOpenLeftMenu: isOpen});
    };

    render() {
        const isOpen = this.state.isOpenLeftMenu;

        return(
            <Drawer
                className={this.props.classes.drawer}
                variant="persistent"
                anchor="left"
                open={isOpen}
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
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Catalog" />
                        <Tab label="Filter" />
                    </Tabs>
                <Divider />
                <SwipeableViews
                    axis={this.props.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <Catalog />
                    <Filter />
                </SwipeableViews>

            </Drawer>
        );
    }
}

const mapStateToProps = ({state}) => ({

});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(LeftMenu));

