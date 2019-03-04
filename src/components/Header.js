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
import BasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Chip from '@material-ui/core/Chip';

const drawerWidth = 240;

const styles = theme => ({
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
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    grow: {
        flexGrow: 1,
    },
    badge: {
        top: '50%',
        right: -3,
        // The border color match the background color.
        border: `2px solid ${
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
            }`,
    },
});

import './Header.scss';
import eventSwitchLeftMenu from "../modules/events";

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
        this.setState({ anchorEl: false });
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
            itemsBasket = cart.items.map((item, i) => <MenuItem  key={`menuItem-${item._id + i}`}>
                <img width="40" height="40" alt={`logo-${item.title}`} src={item.img}  />{item.title}
                </MenuItem>
            ),
            total = cart.items.reduce(((accumulator, currentValue) => accumulator + currentValue.price), 0);

        return(
            <Fragment>
                <CssBaseline />
                <AppBar
                    position="static"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: isOpen,
                    })}
                >
                    <Toolbar disableGutters={!isOpen}>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, isOpen && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Shop
                        </Typography>
                        <Chip label={`Total: ${total}BYN`} className={classes.chip} />
                        <IconButton
                            aria-owns={isOpenBasket ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                            aria-label="menu-appbar"
                            className={classNames(classes.menuButton)}>
                            <Badge badgeContent={cart.items.length} color="primary" classes={{ badge: classes.badge }}>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isOpenBasket}
                            onClose={this.handleClose}
                        >
                            {itemsBasket}
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