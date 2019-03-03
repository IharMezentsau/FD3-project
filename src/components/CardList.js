import React from 'react';
import PropTypes from 'prop-types';
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

const styles = {
    card: {
        maxWidth: 240,
    },
    media: {
        objectFit: 'cover',
    },
};

class CardList extends React.PureComponent{

    static propTypes = {
        classes: PropTypes.object.isRequired,
        device: PropTypes.shape({
            _id: PropTypes.object.isRequired,
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
    };
    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={"this.props.device.title"}
                        className={this.props.classes.media}
                        height="140"
                        image={"this.props.device.img"}
                        title={"this.props.device.title"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {"this.props.device.title"}
                        </Typography>
                        <Typography component="p">
                            {"this.props.device.text"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Tooltip disableFocusListener disableTouchListener title="Add to basket">
                        <Button size="small" color="primary">
                            <AddShoppingCartIcon />
                            Buy
                        </Button>
                    </Tooltip>
                    <Tooltip disableFocusListener disableTouchListener title="Add to basket">
                        <NavLink to="/notebook/15" exact className="PageLink" activeClassName="ActivePageLink">
                            <Button size="small" color="primary">
                                More..
                            </Button>
                        </NavLink>
                    </Tooltip>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(CardList);