import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import ButtonDialog from "../components/ButtonDialog";
import ContactDialog from '../components/ContactDialog';
import sanitized from '../components/utils/sanitized';
import capitalize from '../components/utils/capitalize';
import NPS_Query from '../components/api/NPS_Query';
import getTimeRange from '../components/utils/getTimeRange';
import getDateRange from "../components/utils/getDateRange";
import getTimeZone from '../components/utils/getTimeZone';
import fetch from 'isomorphic-unfetch';
import {
    Chip,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    Hidden,
    Paper,
    Typography,
    makeStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import '../static/default.css';

const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    singlecolumn: {
        flexBasis: "100%",
        position: "relative",
        float: "left",
    },
    grid: {
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
    p: {
        width: "100%",
    },
    maintitle: {
        [theme.breakpoints.only('xs')]:{
            fontSize: "xx-large"
        },
    },
}));

function CenteredGrid({state, events}){
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {events.map((eventObj) => (
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper className={classes.p}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1c-content"
                                    id="panel1c-header"
                                >
                                    <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}} className={classes.maintitle}>
                                        {eventObj.title + " "}
                                        {(eventObj.category.length > 0) ?
                                            <Chip label={eventObj.category} className={classes.chip} style={{backgroundColor: "#29c609"}}/> : <span/>}
                                        {eventObj.types.map((type) => (
                                            <Chip label={type} className={classes.chip} style={{backgroundColor: "#29c609"}}/>
                                        ))}
                                        {(eventObj.organizationname.length > 0) ?
                                            <Chip label={eventObj.organizationname} className={classes.chip} style={{backgroundColor: "#86fdff"}}/> : <span/> }
                                        {(eventObj.isfree.length >  0 && !eventObj.isfree.toLowerCase().includes("false")) ?
                                            <Chip label="Free" className={classes.chip} style={{backgroundColor: "#29c609"}}/> : <span/>}
                                        {(eventObj.isregresrequired.length > 0 && !eventObj.isregresrequired.toLowerCase().includes("false")) ?
                                            <Chip label="Registration Required" className={classes.chip} style={{backgroundColor: "#29c609"}}/> : <span/>}
                                        {(eventObj.isallday.length > 0 && !eventObj.isallday.toLowerCase().includes("false")) ?
                                            <Chip label="All Day" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/> }
                                        {(eventObj.isrecurring.length > 0 && !eventObj.isrecurring.toLowerCase().includes("false")) ?
                                            <Chip label="Recurring" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/> }
                                        {eventObj.tags.map((tag) => (
                                            <Chip label={capitalize(tag)} className={classes.chip} style={{backgroundColor: "#ffc570"}}/>
                                        ))}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div style={{width: "100%"}}>
                                        <div className="events-left">
                                            <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                                                When
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary" style={{fontWeight: 'bold'}}>
                                                {(eventObj.date.length > 0) ? getDateRange(eventObj.date, eventObj.dateend) : ""}
                                            </Typography>
                                            {eventObj.times.map((timeRange) => (
                                                <Typography variant="h5" color="textSecondary" style={{fontWeight: 'bold'}}>
                                                    {(timeRange.timestart.length > 0 || timeRange.timeend.length > 0) ?
                                                        getTimeRange(timeRange.timestart, timeRange.timeend) + " " + getTimeZone(state):  ""}
                                                </Typography>
                                            ))}
                                            <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                                                Where
                                            </Typography>
                                            <Typography variant="h5" color="textSecondary" style={{fontWeight: 'bold'}}>
                                                {(eventObj.location.length > 0) ? eventObj.location : "No Information Found"}
                                            </Typography>
                                        </div>
                                        <ContactDialog name={eventObj.contactname} phone={eventObj.contacttelephonenumber} email={eventObj.contactemailaddress}/>
                                        <ButtonDialog buttonName="Registration" text={eventObj.regresinfo} other="Details" otherurl={eventObj.regresurl}/>
                                        <ButtonDialog buttonName="Payment" text={eventObj.feeinfo}/>
                                    </div>
                                    <div className="events-middle"/>
                                    <div>
                                        <Hidden smUp>
                                            <div className={classes.singlecolumn}>
                                                <Typography paragraph style={{display: "block"}}>
                                                    {sanitized(eventObj.description)}
                                                </Typography>
                                            </div>
                                        </Hidden>
                                    </div>
                                    <Hidden xsDown>
                                        <div className={classes.singlecolumn}>
                                            <Typography variant="h5" paragraph>
                                                {sanitized(eventObj.description)}
                                            </Typography>
                                        </div>
                                    </Hidden>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Paper>
                    </Grid>
                ))}
                {(events.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography color="textPrimary" variant="h4" style={{fontWeight: 'bold'}}>
                                No Events Found
                            </Typography>
                        </Paper>
                    </Grid> : <span/>}
            </Grid>
        </main>
    )
}

const Events = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Events"} park={props.router.query.objectId}/>
        <CenteredGrid events={props.events.data} state={props.parks.data[0].states}/>
    </div>
));

Events.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("events", objectId));
    const events = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, events};
};

export default Events;