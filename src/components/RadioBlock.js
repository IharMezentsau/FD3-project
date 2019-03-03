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
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



import './RadioBlock.scss';
import eventSwitchLeftMenu from "../modules/events";

const drawerWidth = 240,
    styles = theme => ({
        root: {
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
    });

class RadioBlock extends React.PureComponent {

    static propTypes = {
        theme: PropTypes.object,
    };

    state = {
        selectedValue: 'a',
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <FormControlLabel
                    value="top"
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'a'}
                            onChange={this.handleChange}
                            value="a"
                            name="radio-button-demo"
                            aria-label="A"
                            classes={{
                                root: classes.root,
                                checked: classes.checked,
                            }}
                        />}
                    label="Top"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="top"
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'b'}
                            onChange={this.handleChange}
                            value="b"
                            name="radio-button-demo"
                            aria-label="B"
                            classes={{
                                root: classes.root,
                                checked: classes.checked,
                            }}
                        />}
                    label="Top"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="top"
                    control={
                        <Radio
                            checked={this.state.selectedValue === 'c'}
                            onChange={this.handleChange}
                            value="c"
                            name="radio-button-demo"
                            aria-label="C"
                            classes={{
                                root: classes.root,
                                checked: classes.checked,
                            }}
                        />}
                label="Top"
                labelPlacement="top"
                />
            </div>
        );
    }
}

const mapStateToProps = ({state}) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(RadioBlock));

