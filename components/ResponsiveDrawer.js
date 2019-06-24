import React from 'react';
import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    Fade,
    Hidden,
    IconButton,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AlertIcon from './icons/SafetyCautionAlertsBlack30';
import EventsIcon from './icons/CalendarEventsBlack30';
import LessonIcon from './icons/InterpretiveExhibitBlack30';
import PlacesIcon from './icons/MapsBlack30';
import ArticlesIcon from './icons/NewspaperBlack30';
import PeopleIcon from './icons/StatueBlack30';
import VisitorCenterIcon from './icons/VisitorCenterBlack30';
import CampIcon from './icons/CampgroundBlack30';
import NewsIcon from './icons/PostOfficeBlack30';
import HomeIcon from './icons/DirectionsBlack30';
import DetailsIcon from './icons/BrochureBlack30';
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
}));

function ResponsiveDrawer(props){
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    function handleDrawerToggle(){
        setMobileOpen(!mobileOpen);
    }

    function handleSubmit(){
        setLoading(true);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
                <List>
                    <a id="hitbox" href="/">
                        <ListItem button onClick={handleSubmit}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Search Home"/>
                        </ListItem>
                    </a>
                    <a id="hitbox" href={`details?objectId=${props.park}`}>
                        <ListItem button onClick={handleSubmit} selected={props.current === "Details"}>
                            <ListItemIcon>
                                <DetailsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Details"/>
                        </ListItem>
                    </a>
                </List>
            <Divider/>
            <List>
                {['Alerts', 'Articles', 'Events', 'News Releases'].map((text, index) => (
                    <a key={text} id="hitbox" href={`/${text.toLowerCase().replace(" ", "")}?objectId=${props.park}`}>
                        <ListItem button onClick={handleSubmit} selected={props.current === text}>
                            <ListItemIcon>
                                {index === 0 ? <AlertIcon/>: index === 1 ? <ArticlesIcon/>: index === 2 ? <EventsIcon/>: <NewsIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider/>
            <List>
                {['Campgrounds', 'Visitor Centers'].map((text, index) => (
                    <a key={text} id="hitbox" href={`/${text.toLowerCase().replace(" ", "")}?objectId=${props.park}`}>
                        <ListItem button onClick={handleSubmit} selected={props.current === text}>
                            <ListItemIcon>
                                {index === 0 ? <CampIcon/>: <VisitorCenterIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider/>
            <List>
                {['Lesson Plans', 'People', 'Places'].map((text, index) => (
                    <a key={text} id="hitbox" href={`/${text.toLowerCase().replace(" ", "")}?objectId=${props.park}`}>
                        <ListItem button onClick={handleSubmit} selected={props.current === text}>
                            <ListItemIcon>
                                {index === 0 ? <LessonIcon/>: index === 1 ? <PeopleIcon/>: <PlacesIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
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
                <Fade in={loading}>
                    <LinearProgress/>
                </Fade>
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

export default ResponsiveDrawer;