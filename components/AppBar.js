import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';
import {connectSearchBox} from 'react-instantsearch-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            fontSize: 20,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 40,
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 400,
            '&:focus':{
                width: 470,
            },
            fontSize: 20,
        },
        [theme.breakpoints.up('lg')]: {
            width: 600,
            '&:focus': {
                width: 800,
            },
            fontSize: 30,
        },
    }
}));

function SearchBox({currentRefinement, refine}){
    const classes = useStyles();
    return(
        <InputBase
            type="search"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
            placeholder="Search by state, park name, keywords..."
            classes = {{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
        />
    )
}

const CustomSearchBox = connectSearchBox(SearchBox);

function SearchAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "#0096db"}}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        National Park Search
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <CustomSearchBox/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SearchAppBar;
