import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import ButtonDialog from "../components/ButtonDialog";
import HoursTable from '../components/HoursTable';
import addSpacing from '../components/utils/addSpacing';
import NPS_Query from '../components/api/NPS_Query';
import Google_Query from '../components/api/Google_Query';
import fetch from 'isomorphic-unfetch';
import {
    Chip,
    Divider,
    Grid,
    Typography,
    makeStyles} from "@material-ui/core";
import '../static/default.css';

const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(1.5),
    },
    toolbar: theme.mixins.toolbar,
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
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        float: 'left',
    },
    image: {
        width: "100%",
        position: "relative",
        objectFit: 'cover',
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    p: {
        fontSize: "large",
    },
    emphasis: {
        fontSize: "large",
        fontWeight: "bold",
    },
}));

function CenteredGrid({park}){
    const classes = useStyles();

    React.useEffect(() => {
        document.title = "Details";
    }, []);

    return(
        <main className={classes.content}>
        </main>
    )
}

const Details = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        {/*<ResponsiveDrawer name={props.parks.data[0].fullName + " Details"} park={props.router.query.objectId} current="Details"/>*/}
        {/*<CenteredGrid park={props.parks.data[0]}/>*/}
    </div>
));

Details.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId, ["addresses", "contacts", "entranceFees", "entrancePasses", "images", "operatingHours"]));
    const parks = await res.json();
    console.log(parks);

    // console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks};
};

export default Details;