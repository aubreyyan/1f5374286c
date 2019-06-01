import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles
} from "@material-ui/core";
import LaunchIcon from '@material-ui/icons/Launch';
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
    column: {
        flexBasis: "50%",
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
    },
    p: {
        width: "100%",
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function ButtonDialog(props){
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

    if(props.text.replace(/^\s+|\s+$/g, '').length > 0) {
        return (
            <div>
                <Button onClick={handleClick('body')} variant="outlined" className={classes.button} color="inherit">{props.buttonName}<FlipFrontIcon className={classes.rightIcon}/></Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                >
                    <DialogTitle>{props.buttonName}</DialogTitle>
                    <DialogContent dividers={false}>
                        <DialogContentText>
                            {props.text}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {(props.otherurl != null && props.otherurl.length > 0) ? <Button href={props.otherurl} className={classes.button}>{props.other}<LaunchIcon className={classes.rightIcon}/></Button>: <span/>}
                        <Button onClick={handleClose} color="primary" className={classes.button}>Close<FlipBackIcon className={classes.rightIcon}/></Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    else{
        return(
            <span></span>
        )
    }
}

export default ButtonDialog;