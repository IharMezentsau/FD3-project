import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from 'react-router-dom';

import './CardList.scss';
import {addItemToCart} from "../actions/cart";
import {itemsThunk} from "../actions/fetchThunk";

const styles = {
    card: {
        maxHeight: 400,
        textAlign: 'center',
        //maxWidth: 240,
    },
    media: {
        maxWidth: 240,
        maxHeight: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

class CardList extends React.PureComponent{

    static propTypes = {
        classes: PropTypes.object.isRequired,
        device: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            price: PropTypes.number,
        }),
    };

    addToCard = () => {
        this.props.dispatch( addItemToCart(this.props.device) );
    };

    getFromLink = (link) => {
        this.props.dispatch( itemsThunk(this.props.dispatch, link) );
    };

    render() {
        let {classes, device} = this.props;
        return (
            <Card className={classes.card}>
                <NavLink to={`/mobiles/${device._id}`} exact className="PageLink" activeClassName="ActivePageLink">
                    <CardActionArea onClick={() => this.getFromLink(device._id)}>
                        <CardMedia
                            component="img"
                            alt={`logo-${device.title}`}
                            className={classes.media}
                            image={device.img}
                            title={device.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {device.title}
                            </Typography>
                            <Typography component="p">
                                {device.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </NavLink>
                <CardActions>
                    <Tooltip disableFocusListener disableTouchListener title="Add to basket">
                        <Button size="small" color="primary" onClick={this.addToCard}>
                            <AddShoppingCartIcon />
                            Buy {device.price}BYN
                        </Button>
                    </Tooltip>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = ({cart}) => ({
    cart: cart,
});

export default connect(mapStateToProps)(withStyles(styles)(CardList));