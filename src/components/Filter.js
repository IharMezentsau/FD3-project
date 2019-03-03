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
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/StayCurrentPortrait';
import NotebookIcon from '@material-ui/icons/Laptop';
import ContactIcon from '@material-ui/icons/Contacts';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';

import RadioBlock from './RadioBlock';

import './Catalog.scss';
import eventSwitchLeftMenu from "../modules/events";

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
    });

class Menu extends React.PureComponent {

    static propTypes = {
        theme: PropTypes.object,
        classes: PropTypes.object.isRequired,
    };

    state = {
        checkedG: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        return(
            <Typography component="div" dir="ltr" style={{ padding: 8 * 3 }}>
                Custom color&nbsp;
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.checkedG}
                            onChange={this.handleChange('checkedG')}
                            value="checkedG"
                            classes={{
                                root: this.props.classes.rootCheck,
                                checked: this.props.classes.checked,
                            }}
                        />
                    }
                />
                <RadioBlock/>
                <Fab
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

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Menu));

