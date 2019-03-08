import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import CardList from './CardList';
import { itemsThunk } from "../actions/fetchThunk";
import { catalogSet } from "../actions/catalog";

import './GridItems.scss';

const styles = ({
    root: {
        flexGrow: 1,
    },
});

class GridItems extends React.PureComponent {
     static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            price: PropTypes.number,
            sizeScreen: PropTypes.number.isRequired,
            technologyScreen: PropTypes.string.isRequired,
            os: PropTypes.string,
            ram: PropTypes.number,
            flashMemory: PropTypes.number,
            camera: PropTypes.number,
            color: PropTypes.string,
        })),
        classes: PropTypes.object.isRequired,
        status: PropTypes.number.isRequired,
    };

    componentDidMount() {
        this.props.dispatch( itemsThunk(this.props.dispatch, {type: this.props.match.params.type}) );
        this.props.dispatch( catalogSet(this.props.match.params.type) );
    };

    componentWillUnmount() {
        this.props.dispatch( catalogSet(null) );
    };

    render() {
        const { classes, status, items } = this.props;

        let itemsTag;
        if ( status <= 1 ) {
            itemsTag = <Fade in={true} unmountOnExit><CircularProgress/></Fade>;
        } else if ( status === 2 ) {
            itemsTag = "ошибка загрузки данных";
        } else {
            itemsTag = items.map(item => (
                 <Grid key={`GridItem${item._id}`} item >
                     <CardList device={item} type={this.props.match.params.type}/>
                 </Grid>
            ));
        };

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={16}>
                        {itemsTag}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
};

const mapStateToProps = ({items, catalog}) => ({
    items: items.data,
    status: items.status,
    catalog: catalog.data,
});

export default connect(mapStateToProps)(withStyles(styles)(GridItems));