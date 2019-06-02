import React from 'react';
import getReadablePhone from '../components/utils/getReadablePhone';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Divider,
    makeStyles
} from "@material-ui/core";
import {
    Call as PhoneIcon,
    Create as ComposeIcon,
    FlipToFront as FlipFrontIcon,
    FlipToBack as FlipBackIcon,
} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function ContactDialog(props){
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

    if((props.name + props.phone + props.email).length > 0) {
        return (
            <div>
                <Button onClick={handleClick('body')} variant="outlined" className={classes.button} color="inherit">
                    Contact Information
                    <FlipFrontIcon className={classes.rightIcon}/>
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                >
                    <DialogTitle>Contact Information</DialogTitle>
                    <DialogContent dividers={false}>
                        <DialogContentText>
                            {(props.name != null && props.name.length > 0) ? <Typography variant="h4">{props.name}</Typography> : <span/> }
                            {(props.name != null && props.name.length > 0) ? <Divider/> : <span/>}
                            {(props.phone != null && props.phone.length > 0) ? "Phone Number: " + getReadablePhone(props.phone) : ""}
                            {(props.phone != null && props.phone.length > 0 && props.email != null && props.email.length > 0) ? <br/> : <span/>}
                            {(props.email != null && props.email.length > 0) ? "Email: " + props.email: ""}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {(props.phone != null && props.phone.length > 0) ?
                            <Button href={"tel:" + props.phone.replace(/-/g, "")} className={classes.button}>
                                Call
                                <PhoneIcon className={classes.rightIcon}/>
                            </Button> : <span/>}
                        {(props.email != null && props.email.length > 0) ?
                            <Button href={"mailto:" + props.email} className={classes.button}>
                                Email
                                <ComposeIcon className={classes.rightIcon}/>
                            </Button> : <span/> }
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
        return(
            <span></span>
        )
    }
}

export default ContactDialog;