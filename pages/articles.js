import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import {
    Grid,
    Paper,
    Typography,
    Button,
    Divider,
    makeStyles
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import NPS_Query from '../components/api/NPS_Query';
import fetch from 'isomorphic-unfetch';
import '../static/default.css';

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
    grid: {
        [theme.breakpoints.up('xs')]: {
            paddingLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(30),
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    image: {
        width: "100%",
        position: "relative",
        objectFit: "cover",
    },
    p: {
        backgroundColor: "#eaeaea",
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function CenteredGrid({articles}){
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {articles.map((articleObj) => (
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.p}>
                            <Typography color="textPrimary" variant="h3" style={{fontWeight: 'bold'}}>
                                {articleObj.title}
                            </Typography>
                            <Divider/><br/>
                            <div id="trim">
                            {(articleObj.listingimage.url.length > 0) ? <img className={classes.image} src={articleObj.listingimage.url}/> : <div/>}
                            </div>
                            {(articleObj.listingimage.url.length > 0) ? <br/> : <div/>}
                            <Typography paragraph >
                                {articleObj.listingdescription}
                            </Typography>
                            {(articleObj.url.length > 0) ? <Button href={articleObj.url} color="primary">Read Full Article<LaunchIcon className={classes.rightIcon}/></Button> : <div/>}
                            <Divider/>
                        </Paper>
                    </Grid>
                ))}
                {(articles.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography color="textPrimary" variant="h4" style={{fontWeight: 'bold'}}>
                                No Articles Found
                            </Typography>
                        </Paper>
                    </Grid> : <span/>}
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
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Articles"} park={props.router.query.objectId}/>
        <CenteredGrid articles={props.articles.data}/>
    </div>
));

Details.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("articles", objectId));
    const articles = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, articles};
};

export default Details;