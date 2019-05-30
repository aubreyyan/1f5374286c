import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import {
    Grid,
    Paper,
    Typography,
    Chip,
    Button,
    Divider,
} from '@material-ui/core';
import NPS_Query from '../components/NPS_Query';
import fetch from 'isomorphic-unfetch';
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
    },
    paper:{
        padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
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
        margin: theme.spacing(1),
    },
}));

function CenteredGrid({alerts}){
    const classes = useStyles();
    // var states = [];
    // for(var i = 0; i < alerts.length; i++){
    //     const [open, setOpen] = React.useState(false);
    //     states.push([open, setOpen]);
    // }
    // const [scroll, setScroll] = React.useState('body');
    //
    // const handleClick = (scrollType, index) => () => {
    //     states[index][1](true);
    //     setScroll(scrollType);
    // };
    //
    // const handleClose = (index) => () => {
    //     states[index][1](false);
    // };
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>>
            <Grid container spacing={3} className={classes.grid}>
                {alerts.map((alertObj, index) => (
                    <Grid item xs={15} md>
                        <Paper className={classes.paper}>
                            <Chip label={alertObj.category} className={classes.chip} color="secondary"/>
                            <Typography color="textPrimary" variant="h4">
                                {alertObj.title}
                            </Typography>
                            <Divider/><br/>
                            <Typography paragraph>
                                {alertObj.description}
                            </Typography>
                            {(alertObj.url.length > 0) ? <Button href={alertObj.url} color="primary">More Information</Button> : <div/>}
                            {/*<Button variant="outlined" size="large" className={classes.button} onClick={handleClick('body', index)}>Learn More</Button>*/}
                            {/*<Dialog*/}
                            {/*    open={states[index][0]}*/}
                            {/*    onClose={handleClose(index)}*/}
                            {/*    scroll={scroll}*/}
                            {/*    aria-labelledby="scroll-diialog-title"*/}
                            {/*>*/}
                            {/*    <DialogTitle id="scroll-dialog-title">{alertObj.title}</DialogTitle>*/}
                            {/*    <DialogContent dividers={false}>*/}
                            {/*        <DialogContentText>*/}
                            {/*            {alertObj.description}*/}
                            {/*        </DialogContentText>*/}
                            {/*    </DialogContent>*/}
                            {/*    <DialogActions>*/}
                            {/*        {(alertObj.url.length > 0) ? <Button href={alertObj.url} color="primary">More Information</Button> : <div/>}*/}
                            {/*        <Button variant="contained" onClick={handleClose(index)} color="primary">*/}
                            {/*            Close*/}
                            {/*        </Button>*/}
                            {/*    </DialogActions>*/}
                            {/*</Dialog>*/}
                        </Paper>
                    </Grid>
                ))}
                {(alerts.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Chip label="No Alerts Reported" className={classes.chip} style={{
                                backgroundColor: "#29c609",
                            }}/>
                            <Typography color="textPrimary" variant="h4">
                                No Alerts Reported
                            </Typography>
                        </Paper>
                    </Grid> : <div/>}
            </Grid>
        </main>
    )
}

const Alerts = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Alerts"} park={props.router.query.objectId}/>
        <CenteredGrid alerts={props.alerts.data}/>
    </div>
));

Alerts.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("alerts", objectId));
    const alerts = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, alerts};
};

export default Alerts;