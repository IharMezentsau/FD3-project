import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import CardList from './CardList';
import Mobile from './Mobile';

import './GridItems.scss';

import { itemsThunk } from "../actions/fetchThunk";
import {itemsLoading} from "../actions/items";

const spacing = 16;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

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
        this.props.dispatch( itemsThunk(this.props.dispatch, this.props.match.url) );
    }

    render() {
        const { classes, status, items } = this.props;
        console.log(this.props);

        let itemsTag;
        if ( status <= 1 ) {
            itemsTag = <Fade in={true} unmountOnExit><CircularProgress/></Fade>;
        } else if ( status === 2 ) {
            itemsTag = "ошибка загрузки данных";
        } else {
            itemsTag = items.map(item => (
                 <Grid key={`GridItem${item._id}`} item >
                     <CardList device={item} type={this.props.match.url}/>
                 </Grid>
            ));
        };

        return (
            <Grid container className={classes.root} spacing={16} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing} >
                        {itemsTag}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

{/*<Grid container className={classes.root} spacing={16}>*/}
    {/*<Grid item xs={12}>*/}
        {/*<Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>*/}
            {/*{[0, 1, 2].map(value => (*/}
                {/*<Grid key={value} item>*/}
                    {/*<Paper className={classes.paper} />*/}
                {/*</Grid>*/}
            {/*))}*/}
        {/*</Grid>*/}
    {/*</Grid>*/}
{/*</Grid>*/}

const mapStateToProps = ({items}) => ({
    items: items.data,
    status: items.status,
});

export default connect(mapStateToProps)(withStyles(styles)(GridItems));