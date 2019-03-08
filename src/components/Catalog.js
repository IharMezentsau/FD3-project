import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/StayCurrentPortrait';
import NotebookIcon from '@material-ui/icons/Laptop';
import Home from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";

import { itemsThunk } from "../actions/fetchThunk";
import {catalogSet} from "../actions/catalog";
import './Catalog.scss';

class Catalog extends React.PureComponent {
    getFromLink = (params) => {
        this.props.dispatch( itemsThunk(this.props.dispatch, params) );
        this.props.dispatch( catalogSet(params.type) );
    };

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
                    <NavLink to="/mobiles" exact className="PageLink" activeClassName="ActivePageLink">
                        <ListItem button key='key-MobilePhones' onClick={() => this.getFromLink({type: "mobiles"})}>
                            <ListItemIcon><PhoneIcon /></ListItemIcon>
                            <ListItemText primary='Mobile Phones' />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/notebooks" exact className="PageLink" activeClassName="ActivePageLink">
                        <ListItem button key='key-Notebooks' onClick={() => this.getFromLink({type: "notebooks"})}>
                            <ListItemIcon><NotebookIcon /></ListItemIcon>
                            <ListItemText primary='Notebooks' />
                        </ListItem>
                    </NavLink>
                </List>
            </Typography>
        );
    }
}

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(Catalog);