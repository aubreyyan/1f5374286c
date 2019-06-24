import React from "react";
import getList from "./utils/getList";
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
import {
    FlipToFront as FlipFrontIcon,
    FlipToBack as FlipBackIcon,
} from "@material-ui/icons";

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
            <Button onClick={handleClick('body')} variant="outlined" className={classes.button} color="inherit">
                Other Standards
                <FlipFrontIcon className={classes.rightIcon}/>
            </Button>
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
                                <Typography key={std} paragraph>
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
                                <Typography key={std} color="textSecondary">
                                    {std}
                                </Typography>
                            ))}
                        </div> : <span/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className={classes.button}>
                        Close
                        <FlipBackIcon className={classes.rightIcon}/>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LessonDialog;