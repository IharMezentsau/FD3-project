import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import './BasketItem.scss';
import {connect} from "react-redux";
import {removeItemToCart} from "../actions/cart";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: "auto",
    },
    image: {
        width: "auto",
        height: "auto",
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class BasketItem extends React.PureComponent{

    static propTypes = {
        device: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.number,
        }),
        position: PropTypes.number.isRequired,
    };

    removeFromBasket = () => {
        this.props.dispatch( removeItemToCart(this.props.position) );
    };

    render() {
        let {classes, device} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item>
                            <img className={classes.img} alt={`logo-${device.img}`} src={device.img} />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {device.title}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        {device.price}BYN
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Fab aria-label="Delete" size="small" onClick={this.removeFromBasket}>
                                    <DeleteIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({cart}) => ({
    cart: cart.items,
});

export default connect(mapStateToProps)(withStyles(styles)(BasketItem));
