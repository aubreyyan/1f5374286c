import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/api/NPS_Query';
import Google_Query from '../components/api/Google_Query';
import ButtonDialog from '../components/ButtonDialog';
import {
    Avatar,
    Chip,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    Paper,
    Typography,
    makeStyles} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BoatIcon from '../components/icons/BoatLaunchWhite22';
import AmphitheaterIcon from '../components/icons/AmphitheaterWhite22';
import TentIcon from '../components/icons/CampsiteWhite22';
import WaterIcon from '../components/icons/DrinkingWaterWhite22';
import GroupIcon from '../components/icons/FamilyRestroomWhite22';
import FirewoodIcon from '../components/icons/FirewoodWhite22';
import HorseIcon from '../components/icons/HorsebackRidingWhite22';
import SignalIcon from '../components/icons/VolumeControlTelephoneWhite22';
import WifiIcon from '../components/icons/WiFiWhite22';
import ToiletIcon from '../components/icons/FlushToiletsWhite22';
import IceIcon from '../components/icons/IceWhite22';
import LaundryIcon from '../components/icons/LaundryWhite22';
import HookupIcon from '../components/icons/RvTrailerHookupWhite22';
import ShowersIcon from '../components/icons/ShowersWhite22';
import DumpsterIcon from '../components/icons/TrashDumpsterWhite22';
import FoodStorageIcon from '../components/icons/FoodCacheWhite22';
import StaffIcon from '../components/icons/GuidedToursWhite22';
import TrashIcon from '../components/icons/LitterReceptacleWhite22';
import RVIcon from '../components/icons/TrailerSiteWhite22';
import TrailerIcon from '../components/icons/RvCampgroundWhite22';
import CampStoreIcon from '../components/icons/StoreWhite22';
import TrailIcon from '../components/icons/AllTerrainTrailWhite22';
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
    leftcolumn: {
        flexBasis: "55%",
        position: "relative",
    },
    rightcolumn: {
        flexBasis: "42.5%",
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
    image: {
        width: "100%",
        position: "relative",
        objectFit: 'cover',
    },
    p: {
        width: "100%",
    },
}));

function CenteredGrid({name, state, camps}){
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {camps.map((campObj) => (
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={classes.p}>
                            <ExpansionPanel >
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1c-content"
                                id="panel1c-header"
                            >
                                <Typography color="textPrimary" variant="h3" style={{fontWeight: 'bold'}}>
                                    {campObj.name + " "}
                                    {campObj.accessibility.classifications.map((classification) => (
                                        <Chip label={classification} className={classes.chip} color="primary"/>
                                    ))}
                                    {(campObj.campsites.totalsites.length > 0 && parseInt(campObj.campsites.totalsites) > 0) ?
                                        <Chip label={campObj.campsites.totalsites + " Total Campsites"} className={classes.chip} style={{backgroundColor: "#29c609"}}/> : <span/>}
                                    {(campObj.accessibility.accessroads.length > 0 && !campObj.accessibility.accessroads[0].toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c7c837'}}><TrailIcon/></Avatar>} label={campObj.accessibility.accessroads[0]} className={classes.chip} style={{backgroundColor: "#feff47"}}/> : <span/>}
                                    {(campObj.amenities.internetconnectivity.length > 0 && !campObj.amenities.internetconnectivity.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#66c6c8'}}><WifiIcon/></Avatar>} label="Internet Available" className={classes.chip} style={{backgroundColor: "#86fdff"}}/> : <span/>}
                                    {(campObj.amenities.cellphonereception.length > 0 && !campObj.amenities.cellphonereception.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#66c6c8'}}><SignalIcon/></Avatar>} label="Cell Phone Reception" className={classes.chip} style={{backgroundColor: "#86fdff"}}/> : <span/>}
                                    {(campObj.campsites.walkboatto.length > 0 && parseInt(campObj.campsites.walkboatto) > 0) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><BoatIcon/></Avatar>} label={campObj.campsites.walkboatto + " Dock Access"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.campsites.group.length > 0 && parseInt(campObj.campsites.group) > 0) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><GroupIcon/></Avatar>} label={campObj.campsites.group + " Group Reservable"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.campsites.horse.length > 0 && parseInt(campObj.campsites.horse) > 0) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><HorseIcon/></Avatar>} label={campObj.campsites.horse + " Horse"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.campsites.rvonly.length > 0 && parseInt(campObj.campsites.rvonly) > 0) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><RVIcon/></Avatar>} label={campObj.campsites.rvonly + " RV Only"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.campsites.tentonly.length > 0 && parseInt(campObj.campsites.tentonly) > 0) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><TentIcon/></Avatar>} label={campObj.campsites.tentonly + " Tent Only"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.campsites.electricalhookups.length > 0 && parseInt(campObj.campsites.electricalhookups) > 0) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><HookupIcon/></Avatar>} label={campObj.campsites.electricalhookups + " With Electrical Hookups"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.campsites.other.length > 0 && parseInt(campObj.campsites.other) > 0) ?
                                        <Chip label={campObj.campsites.other + " Other"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.accessibility.rvallowed.length > 0 && (parseInt(campObj.accessibility.rvallowed) > 0)) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><RVIcon/></Avatar>} label="RV Permitted" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.accessibility.trailerallowed.length > 0 && (parseInt(campObj.accessibility.trailerallowed) > 0)) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><TrailerIcon/></Avatar>} label="Trailer Permitted" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.reservationssitesfirstcome.length > 0 && parseInt(campObj.reservationssitesfirstcome) > 0) ?
                                        <Chip label={campObj.reservationssitesfirstcome + " First Come Basis"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.reservationssitesreservable.length > 0 && parseInt(campObj.reservationssitesreservable) > 0) ?
                                        <Chip label={campObj.reservationssitesreservable + " Reservation Basis"} className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.amphitheater.length > 0 && !campObj.amenities.amphitheater.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><AmphitheaterIcon/></Avatar>} label="Amphitheater" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.campstore.length > 0 && !campObj.amenities.campstore.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><CampStoreIcon/></Avatar>} label="Camp Store" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.dumpstation.length > 0 && !campObj.amenities.dumpstation.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><DumpsterIcon/></Avatar>} label="Dump Station" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.stafforvolunteerhostonsite.length > 0 && !campObj.amenities.stafforvolunteerhostonsite.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><StaffIcon/></Avatar>} label="Volunteer Staff" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.laundry.length > 0 && !campObj.amenities.laundry.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><LaundryIcon/></Avatar>} label="Laundry" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.potablewater.length > 0 && !campObj.amenities.potablewater[0].toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><WaterIcon/></Avatar>} label="Potable Water" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.showers.length > 0 && !campObj.amenities.showers[0].toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><ShowersIcon/></Avatar>} label="Showers" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.iceavailableforsale.length > 0 && !campObj.amenities.iceavailableforsale.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><IceIcon/></Avatar>} label="Ice" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.firewoodforsale.length > 0 && !campObj.amenities.firewoodforsale.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><FirewoodIcon/></Avatar>} label="Firewood" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.foodstoragelockers.length > 0 && !campObj.amenities.foodstoragelockers.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><FoodStorageIcon/></Avatar>} label="Food Storage" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.trashrecyclingcollection.length > 0 && !campObj.amenities.trashrecyclingcollection.toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><TrashIcon/></Avatar>} label="Trash & Recycling" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                    {(campObj.amenities.toilets.length > 0 && !campObj.amenities.toilets[0].toLowerCase().includes("no")) ?
                                        <Chip avatar={<Avatar style={{backgroundColor: '#c89464'}}><ToiletIcon/></Avatar>} label="Toilets" className={classes.chip} style={{backgroundColor: "#ffc570"}}/> : <span/>}
                                </Typography>
                            </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.leftcolumn}>
                                        <Typography paragraph>
                                            {campObj.description}
                                        </Typography>
                                        {(campObj.accessibility.additionalinfo.length > 0)  ? <br/> : <span/>}
                                        <Typography paragraph>
                                            {campObj.accessibility.additionalinfo}
                                        </Typography>
                                        <ButtonDialog buttonName="Regulations" text={campObj.accessibility.firestovepolicy + "\n" + campObj.regulationsoverview} other="Details" otherurl={campObj.regulationsurl}/>
                                        <ButtonDialog buttonName="Weather" text={campObj.weatheroverview}/>
                                        <ButtonDialog buttonName="Directions" text={campObj.directionsoverview} other="Details" otherurl={campObj.directionsUrl}/>
                                        <ButtonDialog buttonName="Accessibility" text={campObj.accessibility.adainfo}/>
                                        <ButtonDialog buttonName="Recreational Vehicles" text={campObj.accessibility.rvinfo}/>
                                        <ButtonDialog buttonName="Reservations" text={campObj.reservationsdescription} other="Details" otherurl={campObj.reservationsurl}/>
                                    </div>
                                    <div style={{flexBasis: "2.5%"}}/>
                                    <div className={classes.rightcolumn}>
                                        <img className={classes.image} src={Google_Query(campObj.latLong, campObj.name, name, state, 1000, 350, 15)}/>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Paper>
                    </Grid>
                ))}
                {(camps.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography color="textPrimary" variant="h2" style={{fontWeight: 'bold'}}>
                                No Camps Found
                            </Typography>
                        </Paper>
                    </Grid> : <div/>}
            </Grid>
        </main>
    )
}

const Campgrounds = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Campgrounds"} park={props.router.query.objectId}/>
        <CenteredGrid name={props.parks.data[0].fullName} state={props.parks.data[0].states} camps={props.camps.data}/>
    </div>
));

Campgrounds.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("campgrounds", objectId));
    const camps = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, camps};
};

export default Campgrounds;