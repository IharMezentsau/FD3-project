import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import CardList from './CardList';

import './GridItems.scss';

const spacing = 16;

class GridItems extends React.PureComponent {

    render() {
        let Items = [0, 1, 2, 3, 4, 5, 6, 7].map(el => (
            <Grid key={`GridItem${el}`} item xs={12} sm={6} md={2} lg={1} >
                <CardList />
            </Grid>
        ));

        return (
            <Grid container className="GridItemsContainer" spacing={spacing}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing} >
                        {Items}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default GridItems;