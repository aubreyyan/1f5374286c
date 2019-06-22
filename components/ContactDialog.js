import React from 'react';
import getReadablePhone from '../components/utils/getReadablePhone';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Typography,
    makeStyles,
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
    if(props.phoneNumbers != null){
        return(
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
                        {(props.phoneNumbers.map((phone) => (
                            <span>
                                {(phone.type != null && phone.type.length > 0) ?
                                    <span>
                                        <Typography variant="h4">{phone.type}</Typography>
                                        <Divider/>
                                    </span> : <span/> }
                                {(phone.description != null && phone.description.length > 0) ?
                                    <span>
                                        <Typography variant="h5">{phone.description}</Typography>
                                        <br/>
                                    </span> : <span/> }
                                {(phone.phoneNumber != null && phone.phoneNumber.length > 0) ?
                                    <span>
                                        <Typography variant="h5" style={{fontWeight: "bold"}}>{getReadablePhone(phone.phoneNumber)}</Typography>
                                        <br/>
                                    </span> : <span/> }
                                {(phone.extension != null && phone.extension.length > 0) ?
                                    <span>
                                        <Typography variant="h5">{"EXT: " + phone.extension}</Typography>
                                        <br/>
                                    </span> : <span/> }
                            </span>
                        )))}
                        {(props.emails.map((email) => (
                            <span>
                                <Typography variant="h4">Email</Typography>
                                <Divider/>
                                {(email.description != null && email.description.length > 0) ?
                                    <span>
                                        <Typography variant="h5">{email.description}</Typography>
                                        <br/>
                                    </span> : <span/> }
                                {(email.emailAddress != null && email.emailAddress.length > 0) ?
                                    <span>
                                        <Typography variant="h5" style={{fontWeight: "bold"}}>{email.emailAddress}</Typography>
                                        <br/>
                                    </span> : <span/> }
                            </span>
                        )))}
                    </DialogContent>
                    <DialogActions>
                        {(props.phoneNumbers.map((phone) => (
                            (phone.phoneNumber.length > 0) ?
                                <Button href={"tel:" + phone.phoneNumber.replace(/-/g, "")} className={classes.button}>
                                    {(phone.type.length > 0) ? phone.type : "Phone"}
                                    <PhoneIcon className={classes.rightIcon}/>
                                </Button> : <span/>
                        )))}
                        {(props.emails.map((email) => (
                            (email.emailAddress.length > 0) ?
                                <Button href={"mailto:" + email.emailAddress} className={classes.button}>
                                    Email
                                    <ComposeIcon className={classes.rightIcon}/>
                                </Button> : <span/>
                        )))}
                        <Button onClick={handleClose} color="primary" className={classes.button}>
                            Close
                            <FlipBackIcon className={classes.rightIcon}/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    else if((props.name + props.phone + props.email).length > 0) {
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
                            {(props.name != null && props.name.length > 0) ?
                                <span>
                                    <Typography variant="h4">{props.name}</Typography>
                                    <Divider/>
                                </span> : <span/> }
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