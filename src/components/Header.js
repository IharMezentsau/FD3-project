import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Chip from '@material-ui/core/Chip';
import { NavLink } from 'react-router-dom';

import {eventSwitchLeftMenu} from "../modules/events";

const drawerWidth = 240,
    styles = theme => ({
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 20,
            marginRight: 20,
        },
        hide: {
            display: 'none',
        },
        chip: {
            margin: theme.spacing.unit,
        },
        badge: {
            top: '50%',
            right: -3,
            border: `2px solid ${
                theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
                }`,
        },
    });

import './Header.scss';

class Header extends React.PureComponent{
    static propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    state = {
        anchorEl: null,
        isOpenLeftMenu: false,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    setIsOpenLeftMenu = (isOpen) => {
        this.setState({isOpenLeftMenu: isOpen});
    };

    componentDidMount() {
        eventSwitchLeftMenu.addListener('ESetClosedLeftMenu', this.setIsOpenLeftMenu);
    };

    componentWillUnmount() {
        eventSwitchLeftMenu.removeListener('ESetClosedLeftMenu', this.setIsOpenLeftMenu);
    };

    handleDrawerOpen = () => {
        const isOpen = true;
        eventSwitchLeftMenu.emit('ESetOpenLeftMenu', isOpen);
        this.setIsOpenLeftMenu(isOpen);
    };

    render(){
        const { classes } = this.props;
        let { anchorEl } = this.state,
            isOpenBasket = Boolean(anchorEl),
            isOpen = this.state.isOpenLeftMenu,
            {cart} = this.props,
            total = 0,
            itemsBasket = cart.items.map((item, i) => {
                total += item.price;
                return <MenuItem key={`menuItem-${item._id + i}`}>
                        <img width="40" height="40" alt={`logo-${item.title}`} src={item.img}  />{item.title}
                    </MenuItem>;
                });

        return(
            <Fragment>
                <CssBaseline />
                <AppBar position="static" className={classNames(classes.appBar, {[classes.appBarShift]: isOpen,})}>
                    <Toolbar disableGutters={!isOpen}>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, isOpen && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Shop
                        </Typography>
                        <div className="MenuBTN">
                            <Chip label={`Total: ${total}BYN`} className={classes.chip} />
                            <IconButton aria-owns={isOpenBasket ? 'menu-appbar' : undefined} aria-haspopup="true"
                                onClick={this.handleMenu} color="inherit" aria-label="menu-appbar"
                                className={classNames(classes.menuButton)}>
                                <Badge badgeContent={cart.items.length} color="primary"
                                       classes={{ badge: classes.badge }}>
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </div>
                        <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                            transformOrigin={{vertical: 'top', horizontal: 'right'}} open={isOpenBasket}
                            onClose={this.handleClose}>
                            {itemsBasket}
                            <NavLink to="/basket" exact>
                                <MenuItem key={`menuItem`}>
                                    Go to the basket
                                </MenuItem>
                            </NavLink>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

const mapStateToProps = ({cart}) => ({
    cart: cart,
});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Header));