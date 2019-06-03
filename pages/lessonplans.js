import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import ButtonDialog from "../components/ButtonDialog";
import LessonDialog from '../components/LessonDialog';
import NPS_Query from '../components/api/NPS_Query';
import getList from '../components/utils/getList';
import fetch from 'isomorphic-unfetch';
import {
    Button,
    Chip,
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";
import {
    ExpandMore as ExpandMoreIcon,
    Launch as LaunchIcon,
} from '@material-ui/icons';
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
    maintitle: {
        [theme.breakpoints.only('xs')]:{
            fontSize: "xx-large"
        },
        float: "left",
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function CenteredGrid({plans}){
    const classes = useStyles();

    React.useEffect(() => {
        document.title = "Lesson Plans";
    }, []);

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {plans.map((planObj) => (
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1c-content"
                                    id="panel1c-header"
                                >
                                    <div>
                                        <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}} className={classes.maintitle}>
                                            {planObj.title + " "}
                                        </Typography>
                                        <Typography variant="h5" color="textSecondary" style={{fontWeight: 'bold'}} className={classes.maintitle}>
                                            {planObj.gradelevel}
                                        </Typography>
                                        <Divider style={{width: "100%"}}/>
                                        <div style={{float: "left"}}>
                                            <Typography style={{fontWeight: 'bold'}}>
                                                {(planObj.subject.length > 0) ? <Chip label={planObj.subject} className={classes.chip} style={{backgroundColor: "#29c609"}}/> : <span/>}
                                                {(planObj.duration.length > 0) ? <Chip label={planObj.duration} className={classes.chip} style={{backgroundColor: "#29c609"}}/> : <span/>}
                                            </Typography>
                                        </div>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        {(planObj.questionobjective.length > 0) ?
                                            <div className="lessonplans-right">
                                                <Typography variant="h4" color="textPrimary">
                                                    Lesson Objectives
                                                </Typography>
                                                {getList(planObj.questionobjective, "number").map((objective) => (
                                                    <Typography paragraph>
                                                        {objective}
                                                    </Typography>
                                                ))}
                                            </div> : <span/>}
                                        {(planObj.url.length > 0) ?
                                            <Button href={planObj.url} className={classes.button} variant="outlined" color="inherit">
                                                Details
                                                <LaunchIcon className={classes.rightIcon}/>
                                            </Button> : <span/>}
                                        <ButtonDialog buttonName="Math Standards" multitext={planObj.commoncore.mathstandards}/>
                                        <ButtonDialog buttonName="English & L.A. Standards" multitext={planObj.commoncore.elastandards}/>
                                        {(planObj.commoncore.statestandards.length > 0 || planObj.commoncore.additionalstandards.length > 0) ?
                                            <LessonDialog state={planObj.commoncore.statestandards} other={planObj.commoncore.additionalstandards}/> : <span/>}
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Paper>
                    </Grid>
                ))}
                {(plans.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography color="textPrimary" variant="h4" style={{fontWeight: 'bold'}}>
                                No Lesson Plans Found
                            </Typography>
                        </Paper>
                    </Grid> : <span/>}
            </Grid>
        </main>
    )
}

const LessonPlans = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Lesson Plans"} park={props.router.query.objectId} current="Lesson Plans"/>
        <CenteredGrid plans={props.plans.data}/>
    </div>
));

LessonPlans.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("lessonplans", objectId));
    const plans = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, plans};
};

export default LessonPlans;