import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Catalog from './Catalog';
import Filter from './Filter';

import {eventSwitchLeftMenu} from "../modules/events";

import './LeftMenu.scss';
import {connect} from "react-redux";

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
        theme: PropTypes.object,
        catalog: PropTypes.string
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
        const isOpen = this.state.isOpenLeftMenu,
            {classes, theme} = this.props;
        let haveCatalog = this.props.catalog !== null;

        return(
            <Drawer className={classes.drawer} variant="persistent" anchor="left" open={isOpen}
                    classes={{paper: classes.drawerPaper,}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Tabs value={this.state.value}  onChange={this.handleChange} variant="fullWidth">
                    <Tab label="Catalog"/>
                    {haveCatalog && <Tab label="Filter" />}
                </Tabs>
                <Divider />
                    {this.state.value === 0 && <Catalog />}
                    {this.state.value === 1 && <Filter />}
            </Drawer>
        );
    }
}

const mapStateToProps = ({catalog}) => ({
    catalog: catalog.data,
});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(LeftMenu));