import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import {connect} from "react-redux";

import { itemsThunk } from "../actions/fetchThunk";

import './Filter.scss';

const styles = theme => ({
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 'auto',
        },
        textFieldPrice: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: '40%',
        },
        margin: {
            marginTop: 20,
        }
});

class Filter extends React.PureComponent {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        catalog: PropTypes.string,
    };

    state = {
        title: '',
        technologyScreen: '',
        priceStart: "0",
        priceEnd: "0",
        screenSizeStart: "0",
        screenSizeEnd: "0",
        RAMStart: "0",
        RAMEnd: "0",
        flashMemoryStart: "0",
        flashMemoryEnd: "0",
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value});
    };

    handerBlur = name => event => {
        if (event.target.value === "") {
            this.setState({ [name]: "0"});
        };
    };

    handlerFind = () => {
        let query = [];
        if (this.state.title != false)
            query.push(`title=${encodeURIComponent(this.state.title)}`);
        if (this.state.technologyScreen != false)
            query.push(`technologyScreen=${encodeURIComponent(this.state.technologyScreen)}`);
        if (this.state.priceStart != false)
            query.push(`priceStart=${encodeURIComponent(this.state.priceStart)}`);
        if (this.state.priceEnd != false)
            query.push(`priceStart=${encodeURIComponent(this.state.priceEnd)}`);
        if (this.state.screenSizeStart != false)
            query.push(`screenSizeStart=${encodeURIComponent(this.state.screenSizeStart)}`);
        if (this.state.screenSizeEnd != false)
            query.push(`screenSizeEnd=${encodeURIComponent(this.state.screenSizeEnd)}`);
        if (this.state.RAMStart != false)
            query.push(`RAMStart=${encodeURIComponent(this.state.RAMStart)}`);
        if (this.state.flashMemoryStart != false)
            query.push(`flashMemoryStart=${encodeURIComponent(this.state.flashMemoryStart)}`);
        if (this.state.flashMemoryEnd != false)
            query.push(`flashMemoryEnd=${encodeURIComponent(this.state.flashMemoryEnd)}`);
        if (query.length !== 0) {
            history.pushState(null, null, `?${query.join("&")}`);
            this.props.dispatch( itemsThunk(this.props.dispatch, {type: this.props.catalog}) );
        };
    };

    render() {
        const { classes } = this.props;

        return(
            <Typography component="div" dir="ltr" style={{ padding: 8 * 3 }}>
                <TextField label="Title" type="text" className={classes.textField} value={this.state.title}
                           onChange={this.handleChange('title')} margin="normal"/>
                <div className="Price">
                    <TextField label="Price start" type="number" className={classes.textFieldPrice}
                               value={this.state.priceStart} onChange={this.handleChange('priceStart')}
                               onBlur={this.handerBlur('priceStart')}/>
                    <TextField label="Price end" type="number" className={classes.textFieldPrice} value={this.state.priceEnd}
                               onChange={this.handleChange('priceEnd')} onBlur={this.handerBlur('priceEnd')}/>
                </div>
                <TextField label="Screen type" type="text" className={classes.textField} value={this.state.technologyScreen}
                           onChange={this.handleChange('technologyScreen')}
                           onClick={this.handleChange('technologyScreen')} margin="normal"/>
                <div className="ScreenSize">
                    <TextField label="Screen size start" type="number" className={classes.textFieldPrice}
                               value={this.state.screenSizeStart} onChange={this.handleChange('screenSizeStart')}
                               onBlur={this.handerBlur('screenSizeStart')}/>
                    <TextField label="Screen size end" type="number" className={classes.textFieldPrice}
                               value={this.state.screenSizeEnd} onChange={this.handleChange('screenSizeEnd')}
                               onBlur={this.handerBlur('screenSizeEnd')}/>
                </div>
                <div className="RAM">
                    <TextField label="RAM start" type="number" className={classes.textFieldPrice}
                               value={this.state.RAMStart} onChange={this.handleChange('RAMStart')}
                               onBlur={this.handerBlur('RAMStart')}/>
                    <TextField label="RAM end" type="number" className={classes.textFieldPrice}
                               value={this.state.RAMEnd} onChange={this.handleChange('RAMEnd')}
                               onBlur={this.handerBlur('RAMEnd')}/>
                </div>
                <div className="FlashMemory">
                    <TextField label="FlashMemory start" className={classes.textFieldPrice}
                               value={this.state.flashMemoryStart} onChange={this.handleChange('flashMemoryStart')}
                               onBlur={this.handerBlur('flashMemoryStart')} type="number"/>
                    <TextField label="FlashMemory end" className={classes.textFieldPrice}
                               value={this.state.flashMemoryEnd} onChange={this.handleChange('flashMemoryEnd')}
                               onBlur={this.handerBlur('flashMemoryEnd')} type="number"/>
                </div>
                    <Fab onClick={this.handlerFind} variant="extended" size="medium" color="primary" aria-label="Add"
                         className={classes.margin}>
                        Find
                    </Fab>
            </Typography>
        );
    }
}

const mapStateToProps = ({catalog}) => ({
    catalog: catalog.data,
});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Filter));