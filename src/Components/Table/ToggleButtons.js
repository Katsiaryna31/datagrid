import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import booleanSearch from './BooleanSearch';

const useStyles = makeStyles(theme => ({
    toggleContainer: {
        margin: theme.spacing(2, 0),
    },
}));

export default function ToggleButtons({ tableDataList, setTableDataList, conditions, setConditions }) {
    const changeValue = (e, newCondition) => {
        console.log(newCondition);
        console.log(e.target.value);
        setConditions(newCondition);
        booleanSearch(newCondition, tableDataList, setTableDataList)
    };

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup
                        value={conditions}
                        exclusive
                        onChange={changeValue}
                        aria-label="conditions"
                        className="search-boolean"
                    >
                        <ToggleButton value="true" aria-label="+" className="search-item">+</ToggleButton>
                        <ToggleButton value="false" aria-label="-" className="search-item">-</ToggleButton>
                        <ToggleButton value="All" aria-label="All" className="search-item">All</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
        </Grid>
    );
}