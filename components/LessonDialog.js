import React from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Divider,
    Typography,
    makeStyles,
} from "@material-ui/core";
import getList from "./utils/getList";
import FlipFrontIcon from '@material-ui/icons/FlipToFront';
import FlipBackIcon from '@material-ui/icons/FlipToBack';

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
        width: "100%",
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

function LessonDialog({state, other}){
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("body");

    const handleClick = scrollType => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <div>
            <Button onClick={handleClick('body')} variant="outlined" className={classes.button} color="inherit">Other Standards<FlipFrontIcon className={classes.rightIcon}/></Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
            >
                <DialogTitle>Other Standards</DialogTitle>
                <DialogContent>
                    {(state.length > 0) ?
                        <div>
                            <Typography variant="h4">
                                State Standards
                            </Typography>
                            <Divider/>
                            {getList(state, "ccss").map((std) => (
                                <Typography paragraph>
                                    {std}
                                </Typography>
                            ))}
                            <br/>
                        </div> : <span/>}
                    {(other.length > 0) ?
                        <div>
                            <Typography variant="h4">
                                Other Standards
                            </Typography>
                            <Divider/>
                            {getList(other, "ccss").map((std) => (
                                <Typography paragraph>
                                    {std}
                                </Typography>
                            ))}
                        </div> : <span/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className={classes.button}>Close<FlipBackIcon className={classes.rightIcon}/></Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LessonDialog;