import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/StayCurrentPortrait';
import NotebookIcon from '@material-ui/icons/Laptop';
import ContactIcon from '@material-ui/icons/Contacts';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import './Filter.scss';
import eventSwitchLeftMenu from "../modules/events";
import {itemsThunk} from "../actions/fetchThunk";

const drawerWidth = 240,
    styles = theme => ({
        root: {
            backgroundColor: theme.palette.background.paper,
            width: 500,
        },
        rootCheck: {
            color: red[600],
            '&$checked': {
                color: green[500],
            },
        },
        checked: {},
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
        margin: {
            margin: theme.spacing.unit,
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 'auto',
        },
        textFieldPrice: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: '40%',
        },
        formControl: {
            margin: theme.spacing.unit,
            width: 200,
        },
    });

class Filter extends React.PureComponent {

    static propTypes = {
        theme: PropTypes.object,
        classes: PropTypes.object.isRequired,
    };

    state = {
        title: '',
        technologyScreen: '',
        priceStart: 0,
        priceEnd: 0,
        screenSizeStart: 0,
        screenSizeEnd: 0,
        RAMStart: 0,
        RAMEnd: 0,
        flashMemoryStart: 0,
        flashMemoryEnd: 0,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handlerFind = () => {
        let query = [];
        if (this.state.title != false)
            query.push(`title=${encodeURIComponent(this.state.title)}`);
        if (this.state.technologyScreen != false)
            query.push(`technologyScreen=${encodeURIComponent(this.state.technologyScreen)}`);
        if (this.state.priceStart != false)
            query.push(`priceStart=${encodeURIComponent(this.state.priceStart)}`);
        if (this.state.priceEnd != false)
            query.push(`priceStart=${encodeURIComponent(this.state.priceEnd)}`);
        if (this.state.screenSizeStart != false)
            query.push(`screenSizeStart=${encodeURIComponent(this.state.screenSizeStart)}`);
        if (this.state.screenSizeEnd != false)
            query.push(`screenSizeEnd=${encodeURIComponent(this.state.screenSizeEnd)}`);
        if (this.state.RAMStart != false)
            query.push(`RAMStart=${encodeURIComponent(this.state.RAMStart)}`);
        if (this.state.flashMemoryStart != false)
            query.push(`flashMemoryStart=${encodeURIComponent(this.state.flashMemoryStart)}`);
        if (this.state.flashMemoryEnd != false)
            query.push(`flashMemoryEnd=${encodeURIComponent(this.state.flashMemoryEnd)}`);
        if (query.length !== 0) {
            history.pushState(null, null, `${window.location.protocol + window.location.hostname + window.location.port 
                + window.location.pathname}?${query}`);
        };
    };

    render() {
        const { classes } = this.props;
        //     sizeScreen: PropTypes.number.isRequired,
        //     technologyScreen: PropTypes.string.isRequired,
        //     os: PropTypes.string,
        //     ram: PropTypes.number,
        //     flashMemory: PropTypes.number,
        //     camera: PropTypes.number,
        //     color: PropTypes.string,

        return(
            <Typography component="div" dir="ltr" style={{ padding: 8 * 3 }}>
                <TextField
                    label="Title"
                    className={classes.textField}
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                />
                <div className="Price">
                    <TextField
                        label="Price start"
                        className={classes.textFieldPrice}
                        value={this.state.priceStart}
                        onChange={this.handleChange('priceStart')}
                    />
                    <TextField
                        label="Price end"
                        className={classes.textFieldPrice}
                        value={this.state.priceEnd}
                        onChange={this.handleChange('priceEnd')}
                    />
                </div>
                <TextField
                    label="Screen type"
                    className={classes.textField}
                    value={this.state.technologyScreen}
                    onChange={this.handleChange('technologyScreen')}

                    onClick={this.handleChange('technologyScreen')}
                    margin="normal"
                />
                <div className="ScreenSize">
                    <TextField
                        label="Screen size start"
                        className={classes.textFieldPrice}
                        value={this.state.screenSizeStart}
                        onChange={this.handleChange('screenSizeStart')}
                    />
                    <TextField
                        label="Screen size end"
                        className={classes.textFieldPrice}
                        value={this.state.screenSizeEnd}
                        onChange={this.handleChange('screenSizeEnd')}
                    />
                </div>
                <div className="RAM">
                    <TextField
                        label="RAM start"
                        className={classes.textFieldPrice}
                        value={this.state.RAMStart}
                        onChange={this.handleChange('RAMStart')}
                    />
                    <TextField
                        label="RAM end"
                        className={classes.textFieldPrice}
                        value={this.state.RAMEnd}
                        onChange={this.handleChange('RAMEnd')}
                    />
                </div>
                <div className="FlashMemory">
                    <TextField
                        label="FlashMemory start"
                        className={classes.textFieldPrice}
                        value={this.state.flashMemoryStart}
                        onChange={this.handleChange('flashMemoryStart')}
                    />
                    <TextField
                        label="FlashMemory end"
                        className={classes.textFieldPrice}
                        value={this.state.flashMemoryEnd}
                        onChange={this.handleChange('flashMemoryEnd')}
                    />
                </div>
                    <Fab
                        onClick={this.handlerFind}
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                        className={classes.margin}
                    >
                        Find
                    </Fab>
            </Typography>
        );
    }
}

const mapStateToProps = ({state}) => ({

});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Filter));

