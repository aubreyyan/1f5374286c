import React from 'react';
import capitalize from '../components/utils/capitalize';
import {Divider, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(1.5),
    },
    emphasis: {
        fontSize: "large",
        fontWeight: "bold",
    },
}));

function HoursTable(props){
    const classes = useStyles();
    const {hoursList} = props;
    const days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];
    return(
        <span>
            {days.map((day) => (
                <Grid container spacing={1}>
                    <Grid item xs={4} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.emphasis} align="center">
                                {capitalize(day)}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={8} md={8} lg={8}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.emphasis}>
                                {hoursList[day]}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            ))}
        </span>
    )
}

export default HoursTable;