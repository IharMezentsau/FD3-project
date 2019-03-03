import React from 'react';
import PropTypes from 'prop-types';
import {itemsThunk} from "../actions/fetchThunk";
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

import './Mobile.scss';

class Mobile extends React.PureComponent{

    static propTypes = {
        classes: PropTypes.object.isRequired,
        device: PropTypes.shape({
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
        })
    };

    componentDidMount() {
        this.props.dispatch( itemsThunk(this.props.dispatch, this.props.match.url) );
    }

    render() {
        let {classes, device} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt={`logo-${device.img}`} src={device.img} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Standard license
                                    </Typography>
                                    <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                                    <Typography color="textSecondary">ID: 1030114</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({items}) => ({
    items: items.data,
    status: items.status,
});

export default connect(mapStateToProps)(withStyles(styles)(Mobile));