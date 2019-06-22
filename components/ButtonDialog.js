import React from 'react';
import getReadablePhone from '../components/utils/getReadablePhone';
import parseDate from '../components/utils/parseDate';
import getDateRange from '../components/utils/getDateRange';
import HoursTable from '../components/HoursTable';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Typography,
    makeStyles, Grid, Paper,
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
    image: {
        width: "100%",
        position: "relative",
        objectFit: 'cover',
    },
    emphasis: {
        fontSize: "large",
        fontWeight: "bold",
    },
    text: {
        color: "#000000",
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

    if(props.hours != null){
        if(props.hours.length > 0){
            return(
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
                                {(props.hours.map((hour) => (
                                <span>
                                    <Typography variant="h4" className={classes.text}>
                                        {hour.name}
                                        <Divider/>
                                    </Typography>
                                    <Typography paragraph className={classes.text}>
                                        {hour.description}
                                    </Typography>
                                    <HoursTable hoursList={hour.standardHours}/>
                                    <br/>
                                    {(hour.exceptions != null && hour.exceptions.length > 0) ?
                                        <span>
                                            <Typography variant="h4" className={classes.text}>
                                                Exceptions
                                                <Divider/>
                                            </Typography>
                                            {(hour.exceptions.map((exception) => (
                                                <span>
                                                    {console.log(exception)}
                                                    <Typography variant="h5" className={classes.text}>
                                                        {exception.name}
                                                        <Divider/>
                                                        {getDateRange(parseDate(exception.startDate), parseDate(exception.endDate))}
                                                    </Typography>
                                                    {(exception.exceptionHours != null && Object.keys(exception.exceptionHours).length > 0 && exception.exceptionHours.constructor === Object) ?
                                                        <HoursTable hoursList={exception.exceptionHours}/>
                                                         : <Typography variant="h5" className={classes.text}>
                                                            No Data Available
                                                        </Typography>}
                                                        <br/>
                                                </span>
                                            )))}
                                        </span> : <span/> }
                                        <br/>
                                </span>
                                )))}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        }
        else{
            return(<span></span>)
        }
    }
    else if(props.fees != null){
        return(
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
                            {props.fees.map((fee) => (
                                <span>
                                    <Typography variant="h4" className={classes.text}>
                                        {fee.title}
                                    </Typography>
                                    <Typography paragraph className={classes.text}>
                                        {fee.description}
                                    </Typography>
                                    <Typography paragraph color="textPrimary" className={classes.emphasis}>
                                        {"$" + parseFloat(fee.cost).toFixed(2) + " USD"}
                                    </Typography>
                                </span>
                            ))}
                            {props.passes.map((pass) => (
                                <span>
                                    <Typography variant="h4" className={classes.text}>
                                        {pass.title}
                                    </Typography>
                                    <Typography paragraph className={classes.text}>
                                        {pass.description}
                                    </Typography>
                                    <Typography paragraph color="textPrimary" className={classes.emphasis}>
                                        {"$" + parseFloat(pass.cost).toFixed(2) + " USD"}
                                    </Typography>
                                </span>
                            ))}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button}>
                            Close
                            <FlipBackIcon className={classes.rightIcon}/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    if(props.images != null){
        return(
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
                            {props.images.map((image) => (
                                <span>
                                    <Typography variant="h4" className={classes.text}>
                                        {image.title}
                                    </Typography>
                                    {(image.url.length > 0) ?
                                        <img className={classes.image} src={image.url}/> : <span/>}
                                    <Typography paragraph className={classes.text}>
                                        {image.caption + " @" + image.credit}
                                    </Typography>
                                </span>
                            ))}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button}>
                            Close
                            <FlipBackIcon className={classes.rightIcon}/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    if(props.phones != null){
        return(
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
                            {props.phones.map((phone) => (
                                <span>
                                    <Typography variant="h4" className={classes.text}>
                                        {phone.type}
                                    </Typography>
                                    <Typography paragraph className={classes.text}>
                                        {getReadablePhone(phone.phoneNumber)}
                                    </Typography>
                                    {(phone.extension.length > 0) ?
                                        <Typography className={classes.text}>
                                            {"EXT: " + phone.extension}
                                        </Typography> : <span/>}
                                    <Typography paragraph className={classes.text}>
                                        {phone.description}
                                    </Typography>
                                </span>
                            ))}
                            {(props.emails.length > 0) ?
                                <span>
                                    <Typography variant="h4" className={classes.text}>
                                        Emails
                                    </Typography>
                                    {props.emails.map((email) => (
                                        <span>
                                            <Typography paragraph className={classes.text}>
                                                {email.emailAddress}
                                            </Typography>
                                            <Typography paragraph className={classes.text}>
                                                {email.description}
                                            </Typography>
                                        </span>
                                    ))}
                                </span> : <span/>}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button}>
                            Close
                            <FlipBackIcon className={classes.rightIcon}/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    else if(props.addresses != null){
        return(
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
                            {props.addresses.map((address) => (
                                <span>
                                    <Typography variant="h4" className={classes.text}>
                                        {address.type + " Address"}
                                    </Typography>
                                    <Divider/>
                                    <Typography paragraph className={classes.text}>
                                        {address.line1}
                                    </Typography>
                                    <Typography paragraph className={classes.text}>
                                        {address.line2}
                                    </Typography>
                                    <Typography paragraph className={classes.text}>
                                        {address.line3}
                                    </Typography>
                                    <Typography paragraph className={classes.text}>
                                        {address.city + ", " + address.stateCode + " " + address.postalCode}
                                    </Typography>
                                </span>
                            ))}
                            <Divider/>
                            <Typography paragraph className={classes.text}>
                                {props.text}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {(props.otherurl != null && props.otherurl.length > 0) ?
                            <Button href={props.otherurl} color="primary" className={classes.button}>
                                {props.other}
                                <LaunchIcon className={classes.rightIcon}/>
                            </Button>: <span/>}
                        <Button onClick={handleClose} className={classes.button}>
                            Close
                            <FlipBackIcon className={classes.rightIcon}/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

    else if(props.multitext != null){
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
                                    <Typography paragraph className={classes.text}>
                                        {subj}
                                    </Typography>
                                ))}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            {(props.otherurl != null && props.otherurl.length > 0) ?
                                <Button href={props.otherurl} color="primary" className={classes.button}>
                                    {props.other}
                                    <LaunchIcon className={classes.rightIcon}/>
                                </Button>: <span/>}
                            <Button onClick={handleClose} className={classes.button}>
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
                            <Typography p  className={classes.text}>
                                {props.text}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {(props.otherurl != null && props.otherurl.length > 0) ?
                            <Button href={props.otherurl} color="primary" className={classes.button}>
                                {props.other}
                                <LaunchIcon className={classes.rightIcon}/>
                            </Button>: <span/>}
                        <Button onClick={handleClose} className={classes.button}>
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