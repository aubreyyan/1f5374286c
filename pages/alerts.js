import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/api/NPS_Query';
import {
    Button,
    Chip,
    Divider,
    Grid,
    Paper,
    Typography,
    makeStyles,
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grid:{
        [theme.breakpoints.up('xs')]: {
            paddingLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(30),
        },
    },
    chip: {
        margin: theme.spacing(1),
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function CenteredGrid({alerts}){
    const classes = useStyles();

    React.useEffect(() => {
        document.title = "Alerts";
    }, []);

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {alerts.map((alertObj) => (
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper className={classes.paper}>
                            <Chip label={(alertObj.category.length > 0) ? alertObj.category : "General"} className={classes.chip} color="secondary"/>
                            <Typography color="textPrimary" variant="h4">
                                {alertObj.title}
                            </Typography>
                            <Divider/><br/>
                            <Typography paragraph>
                                {alertObj.description}
                            </Typography>
                            {(alertObj.url.length > 0) ?
                                <Button href={alertObj.url} color="primary" className={classes.button}>
                                    More Information
                                    <LaunchIcon className={classes.rightIcon}/>
                                </Button> : <div/>}
                        </Paper>
                    </Grid>
                ))}
                {(alerts.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Chip label="No Alerts Reported" className={classes.chip} style={{
                                backgroundColor: "#29c609",
                            }}/>
                            <Typography color="textPrimary" variant="h4" style={{fontWeight: 'bold'}}>
                                No Alerts Reported
                            </Typography>
                        </Paper>
                    </Grid> : <div/>}
            </Grid>
        </main>
    )
}

const Alerts = withRouter( props=> (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Alerts"} park={props.router.query.objectId} current="Alerts"/>
        <CenteredGrid alerts={props.alerts.data}/>
    </div>
));

Alerts.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId, []));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("alerts", objectId, []));
    const alerts = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, alerts};
};

export default Alerts;