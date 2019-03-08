import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import BasketItem from './BasketItem';

import './BasketItem.scss';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: "auto",
        backgroundColor: theme.palette.background.paper,
    },
});

class Basket extends React.PureComponent{

    static propTypes = {
        classes: PropTypes.object.isRequired,
        cart: PropTypes.arrayOf(PropTypes.shape({
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
    };

    render() {
        let {classes, cart} = this.props,
            device = cart.map((el, i) => <BasketItem key={el._id + i} position={i} device={el}/>);

        return (
            <Grid container justify="center" >
                <List className={classes.root}>
                    {device}
                </List>
            </Grid>
        );
    }
}

const mapStateToProps = ({cart}) => ({
    cart: cart.items,
});

export default connect(mapStateToProps)(withStyles(styles)(Basket));