import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

import CardList from './CardList';

import './GridItems.scss';

import { itemsThunk } from "../actions/fetchThunk";

const spacing = 16;

class GridItems extends React.PureComponent {
    // static propTypes = {
    //     itemsArray: PropTypes.arrayOf(PropTypes.shape({
    //         title: PropTypes.string.isRequired,
    //         img: PropTypes.string.isRequired,
    //         text: PropTypes.string.isRequired,
    //         price: PropTypes.number,
    //         sizeScreen: PropTypes.number.isRequired,
    //         technologyScreen: PropTypes.string.isRequired,
    //         os: PropTypes.string,
    //         ram: PropTypes.number,
    //         flashMemory: PropTypes.number,
    //         camera: PropTypes.number,
    //         color: PropTypes.string,
    //     })),
    // };


    componentDidMount() {
        this.props.dispatch( itemsThunk(this.props.dispatch) );
    }

    render() {
        let itemsTag;
        if ( this.props.status <= 1 ) {
            itemsTag = <Fade in={true} unmountOnExit><CircularProgress/></Fade>;
        } else if ( this.props.status === 2 ) {
            itemsTag = "ошибка загрузки данных";
        } else {
            itemsTag = this.props.items.map(item => (
                 <Grid key={`GridItem${item.id}`} item xs={12} sm={6} md={4} lg={3}>
                     <CardList />
                 </Grid>
                ));
        };

        return (
            <Grid container className="GridItemsContainer" spacing={spacing}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing} >
                        {itemsTag}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = ({items}) => ({
    items: items.data,
    status: items.status,
});

export default connect(mapStateToProps)(GridItems);