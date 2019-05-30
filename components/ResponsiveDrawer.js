import React from 'react';
import {
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    Hidden,
    Drawer,
    IconButton,
    LinearProgress,
    Fade,
} from "@material-ui/core";
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
import DetailsIcon from '../components/BrochureBlack30';
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
                    <ListItem button onClick={handleSubmit}>
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
                    <Link href={`/${props.park}/${text.toLowerCase().replace(" ", "-")}`} as={`/${text.toLowerCase().replace(" ", "")}?objectId=${props.park}`}>
                        <ListItem button key={text} onClick={handleSubmit}>
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
                    <Link href={`/${props.park}/${text.toLowerCase().replace(" ", "-")}`} as={`/${text.toLowerCase().replace(" ", "")}?objectId=${props.park}`}>
                        <ListItem button key={text} onClick={handleSubmit}>
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
                    <Link href={`/${props.park}/${text.toLowerCase().replace(" ", "-")}`} as={`/${text.toLowerCase().replace(" ", "")}?objectId=${props.park}`}>
                        <ListItem button key={text} onClick={handleSubmit}>
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