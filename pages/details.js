import React from 'react';
import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import AlertIcon from '../components/SafetyCautionAlertsBlack30';
import EventsIcon from '../components/CalendarEventsBlack30';
import LessonIcon from '../components/InterpretiveExhibitBlack30';
import PlacesIcon from '../components/MapsBlack30';
import ArticlesIcon from '../components/NewspaperBlack30';
import PeopleIcon from '../components/StatueBlack30';
import VisitorCenterIcon from '../components/VisitorCenterBlack30';
import CampIcon from '../components/CampgroundBlack30';
import NewsIcon from '../components/PostOfficeBlack30';
import HomeIcon from '../components/DirectionsBlack30';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '../static/default.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props){
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle(){
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <Link as="/" href="/">
                    <ListItem button key="Search Home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Search Home"/>
                    </ListItem>
                </Link>
            </List>
            <Divider/>
            <List>
                {['Alerts', 'Articles', 'Events', 'News Releases'].map((text, index) => (
                    <Link as={`/${props.park}/${text.toLowerCase().replace(" ", "-")}`} href={`/${text.toLowerCase().replace(" ", "-")}?objectId=${props.park}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 ? <AlertIcon/>: index === 1 ? <ArticlesIcon/>: index === 2 ? <EventsIcon/>: <NewsIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
            <List>
                {['Campgrounds', 'Visitor Centers'].map((text, index) => (
                    <Link as={`/${props.park}/${text.toLowerCase().replace(" ", "-")}`} href={`/${text.toLowerCase().replace(" ", "-")}?objectId=${props.park}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 ? <CampIcon/>: <VisitorCenterIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
            <List>
                {['Lesson Plans', 'People', 'Places'].map((text, index) => (
                    <Link as={`/${props.park}/${text.toLowerCase().replace(" ", "-")}`} href={`/${text.toLowerCase().replace(" ", "-")}?objectId=${props.park}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 ? <LessonIcon/>: index === 1 ? <PeopleIcon/>: <PlacesIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return(
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar} style={{backgroundColor: "#0096db"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {props.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

const Details = withRouter( props => (
    <ResponsiveDrawer name="placeholder text" park={props.router.query.objectId}/>
));

// Details.getInitialProps = async function() {
//     const res = await fetch()
// };

export default Details;