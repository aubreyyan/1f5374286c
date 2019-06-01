import React from 'react';
import {Highlight} from "react-instantsearch-dom";
import {
    Card,
    Typography,
    Paper,
    Button,
} from "@material-ui/core";
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import Link from 'next/link';
import {makeStyles} from "@material-ui/styles";
import '../static/default.css';

const useStyles = makeStyles(theme =>({
    root: {
        background: 'linear-gradient(45deg, #4496DB 30%, #5df78e 90%)',
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        width: "100%",
        padding: '0 30px',
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    button: {
        margin: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(2),
    },
    pos: {
        marginBottom: 12,
    },
}));

function NewButton({name, parkCode}){
    const classes = useStyles();
    return(
        <Link as={`/${parkCode}/details`} href={`/details?objectId=${parkCode}`}>
            <a id="hitbox" href={`/details/${parkCode}`}>
                <Button color="primary" className={classes.button} variant="contained">
                    {`Learn more about ${name}`}
                    <FlightIcon className={classes.rightIcon}/>
                </Button>
            </a>
        </Link>
    )
}

class Hit extends React.Component{
    render() {
        const props = this.props;
        const {hit} = this.props;
        return(
            <Card>
                <Paper id="paper" square>
                    <Typography color="textPrimary" variant="h3">
                        <Highlight className="ais-Highlight-header" attribute="fullName" hit={props.hit}/>
                        <Highlight className="ais-Highlight-state" attribute="states" hit={props.hit}/>
                    </Typography>
                </Paper>
                <Paper id="paper" square>
                    <Typography color="textSecondary">
                        <Highlight className="ais-Highlight-details" attribute="description" hit={props.hit}/>
                    </Typography>
                    <NewButton name={hit.fullName} parkCode={hit.parkCode}/>
                </Paper>
            </Card>
        )
    }
}

export default Hit;