import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/api/NPS_Query';
import getDateRange from '../components/utils/getDateRange';
import fetch from 'isomorphic-unfetch';
import {
    Grid,
    Paper,
    Button,
    Divider,
    Typography,
    makeStyles,
} from "@material-ui/core";
import LaunchIcon from '@material-ui/icons/Launch';
import '../static/default.css';

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
    singlecolumn: {
        flexBasis: "100%",
        position: "relative",
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
        [theme.breakpoints.only('xs')]:{
            fontSize: "large",
        },
    },
    maintitle: {
        [theme.breakpoints.only('xs')]:{
            fontSize: "xx-large"
        },
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function CenteredGrid({news}){
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {news.map((newsObj) => (
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}} className={classes.maintitle}>
                                {newsObj.title}
                            </Typography>
                            <Divider/><br/>
                            <div id="trim">
                                {(newsObj.image.url.length > 0) ? <img className={classes.image} src={newsObj.image.url}/> : <span/> }
                            </div>
                            {(newsObj.image.url.length > 0) ? <br/> : <span/>}
                            <Typography variant="h5" paragraph color="textSecondary">
                                {(newsObj.releasedate.includes(" ")) ? getDateRange(newsObj.releasedate.split(" ")[0], null) : ""}
                            </Typography>
                            <Typography paragraph variant="h4" className={classes.p}>
                                {newsObj.abstract}
                            </Typography>
                            {(newsObj.url.length > 0) ? <Button href={newsObj.url} color="primary">Read Full Release<LaunchIcon className={classes.rightIcon}/></Button> : <div/>}
                            <Divider/>
                        </Paper>
                    </Grid>
                ))}
                {(news.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography color="textPrimary" variant="h4" style={{fontWeight: 'bold'}}>
                                No News Releases Found
                            </Typography>
                        </Paper>
                    </Grid> : <span/>}
            </Grid>
        </main>
    )
}

const NewsReleases = withRouter(props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " News Releases"} park={props.router.query.objectId}/>
        <CenteredGrid news={props.news.data}/>
    </div>
));

NewsReleases.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("newsreleases", objectId));
    const news = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, news};
};

export default NewsReleases;