import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

import {addItemToCart} from "../actions/cart";
import {itemsThunk} from "../actions/fetchThunk";

import './Product.scss';

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


class Product extends React.PureComponent{

    static propTypes = {
        classes: PropTypes.object.isRequired,
        item: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            price: PropTypes.number,
            sizeScreen: PropTypes.number.isRequired,
            technologyScreen: PropTypes.string.isRequired,
            os: PropTypes.string,
            ram: PropTypes.number,
            flashMemory: PropTypes.number.isRequired,
            camera: PropTypes.number,
            color: PropTypes.string
        }),
        status: PropTypes.number,
    };

    componentDidMount() {
        this.props.dispatch( itemsThunk(this.props.dispatch,
            {type: this.props.match.params.type, id: this.props.match.params.prodid}) );
    }

    addToCard = () => {
        this.props.dispatch( addItemToCart(this.props.item) );
    };

    render() {
        let {classes, item, status} = this.props,
            tagItem;

        if ( status <= 1 ) {
            tagItem = <Fade in={true} unmountOnExit><CircularProgress/></Fade>;
        } else if ( status === 2 ) {
            tagItem = "ошибка загрузки данных";
        } else {
            tagItem = (
                <React.Fragment>
                    <Grid item>
                        <img className={classes.img} alt={`logo-${item.img}`} src={item.img} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {item.title}
                    </Typography>
                        <Typography gutterBottom>{item.text}</Typography>
                        <Typography color="textSecondary">Screen size: {item.sizeScreen}</Typography>
                        <Typography color="textSecondary">
                            Screen technology: {item.technologyScreen}
                        </Typography>
                        <Typography color="textSecondary">OS: {item.os}</Typography>
                        <Typography color="textSecondary">RAM: {item.ram} GB</Typography>
                        <Typography color="textSecondary">Memory: {item.flashMemory} GB</Typography>
                        <Typography color="textSecondary">Camera: {item.camera} Mp</Typography>
                        <Typography color="textSecondary">Color: {item.color}</Typography>
                    </Grid>
                    </Grid>
                        <Grid item>
                            <Button size="small" color="primary" onClick={this.addToCard}>
                                <AddShoppingCartIcon />
                                {item.price}BYN
                            </Button>
                        </Grid>
                    </Grid>
                </React.Fragment>);
        };

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={16} justify="center">
                        {tagItem}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({product}) => ({
    item: product.data,
    status: product.status,
});

export default connect(mapStateToProps)(withStyles(styles)(Product));