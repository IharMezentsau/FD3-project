import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/StayCurrentPortrait';
import NotebookIcon from '@material-ui/icons/Laptop';
import ContactIcon from '@material-ui/icons/Contacts';
import Home from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import './Catalog.scss';

class Catalog extends React.PureComponent {
    render() {
        return(
            <Typography component="div" dir="ltr" style={{ padding: 8 * 3 }}>
                <List>
                    <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">
                        <ListItem button key='key-Home'>
                            <ListItemIcon><Home /></ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/mobiles/1" exact className="PageLink" activeClassName="ActivePageLink">
                        <ListItem button key='key-MobilePhones' >
                            <ListItemIcon><PhoneIcon /></ListItemIcon>
                            <ListItemText primary='Mobile Phones' />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/notebooks" exact className="PageLink" activeClassName="ActivePageLink">
                        <ListItem button key='key-Notebooks'>
                            <ListItemIcon><NotebookIcon /></ListItemIcon>
                            <ListItemText primary='Notebooks' />
                        </ListItem>
                    </NavLink>
                </List>
                <Divider />
                <List>
                    <NavLink to="/contacts" exact className="PageLink" activeClassName="ActivePageLink">
                        <ListItem button key='key-Contacts'>
                            <ListItemIcon><ContactIcon /></ListItemIcon>
                            <ListItemText primary='Contacts' />
                        </ListItem>
                    </NavLink>
                </List>
            </Typography>
        );
    }
}

const mapStateToProps = ({state}) => ({

});

export default connect(mapStateToProps)(Catalog);