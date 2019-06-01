import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/NPS_Query';
import Google_Query from '../components/Google_Query';
import {
    Chip,
    Grid,
    Typography,
    Divider,
    Hidden,
    Button,
    makeStyles} from "@material-ui/core";
import fetch from 'isomorphic-unfetch';
import '../static/default.css';
import ButtonDialog from "../components/ButtonDialog";
import LaunchIcon from '@material-ui/icons/Launch';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        width: "100%",
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
    button: {
        margin: theme.spacing(1),
        float: 'left',
    },
    image: {
        width: "100%",
        position: "relative",
        objectFit: 'cover',
    },
    p: {
        width: "100%",
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function CenteredGrid({park}){
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                <Typography color="textPrimary" variant="h2" style={{fontWeight: 'bold', paddingBottom: "15px", width: "100%"}}>
                    {"Welcome to " + park.fullName + ", " + park.states + " "}
                    {(park.designation.length > 0) ? <Chip label={park.designation} className={classes.chip} color="primary"/> : <span/> }
                    <Divider/>
                </Typography>
                <div className="leftcol">
                    <Typography variant="h5" paragraph>
                        {park.description}
                    </Typography>
                    <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                        Weather
                        <Divider/>
                    </Typography>
                    <Typography variant="h5" paragraph>
                        {park.weatherInfo}
                    </Typography>
                    <Hidden smUp>
                        <ButtonDialog buttonName="Directions" text={park.directionsInfo} other="Details" otherurl={park.directionsUrl}/>
                    </Hidden>
                    <Hidden xsDown>
                        <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                            Directions
                            <Divider/>
                        </Typography>
                        <Typography variant="h6" paragraph>
                            {park.directionsInfo}
                        </Typography>
                        {(park.directionsUrl.length > 0) ? <Button href={park.directionsUrl} variant="contained" color="inherit">Directions<LaunchIcon className={classes.rightIcon}/></Button> : <span/>}
                    </Hidden>
                </div>
                <div style={{flexBasis: "2.5%"}}/>
                <div className="rightcol">
                    <img className={classes.image} src={Google_Query(park.latLong, "", park.fullName, park.states, 1300, 500, 12)}/>
                </div>
            </Grid>
        </main>
    )
}

const Details = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Details"} park={props.router.query.objectId}/>
        <CenteredGrid park={props.parks.data[0]}/>
    </div>
));

Details.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks};
};

export default Details;