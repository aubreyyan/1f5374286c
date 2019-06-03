import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    makeStyles,
} from "@material-ui/core";
import {
    Launch as LaunchIcon,
    FlipToFront as FlipFrontIcon,
    FlipToBack as FlipBackIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        float: 'left'
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

    if(props.multitext != null){
        if(props.multitext.length > 0){
            return (
                <div>
                    <Button onClick={handleClick('body')} variant="outlined" className={classes.button} color="inherit">
                        {props.buttonName}
                        <FlipFrontIcon className={classes.rightIcon}/>
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                    >
                        <DialogTitle>{props.buttonName}</DialogTitle>
                        <DialogContent dividers={false}>
                            <DialogContentText>
                                {props.multitext.map((subj) => (
                                    <Typography paragraph color="textSecondary">
                                        {subj}
                                    </Typography>
                                ))}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            {(props.otherurl != null && props.otherurl.length > 0) ?
                                <Button href={props.otherurl} className={classes.button}>
                                    {props.other}
                                    <LaunchIcon className={classes.rightIcon}/>
                                </Button>: <span/>}
                            <Button onClick={handleClose} color="primary" className={classes.button}>
                                Close
                                <FlipBackIcon className={classes.rightIcon}/>
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        }
        else{
            return(<span></span>)
        }

    }
    else if(props.text.replace(/^\s+|\s+$/g, '').length > 0) {
        return (
            <span>
                <Button onClick={handleClick('body')} variant="outlined" className={classes.button} color="inherit">
                    {props.buttonName}
                    <FlipFrontIcon className={classes.rightIcon}/>
                </Button>
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
                        {(props.otherurl != null && props.otherurl.length > 0) ?
                            <Button href={props.otherurl} className={classes.button}>
                                {props.other}
                                <LaunchIcon className={classes.rightIcon}/>
                            </Button>: <span/>}
                        <Button onClick={handleClose} color="primary" className={classes.button}>
                            Close
                            <FlipBackIcon className={classes.rightIcon}/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </span>
        )
    }
    else{
        return(
            <span></span>
        )
    }
}

export default ButtonDialog;