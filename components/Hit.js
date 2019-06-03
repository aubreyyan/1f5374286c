import React from 'react';
import {Highlight} from "react-instantsearch-dom";
import {
    Button,
    Card,
    Fade,
    LinearProgress,
    Paper,
    Typography,
} from "@material-ui/core";
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import {makeStyles} from "@material-ui/styles";
import '../static/default.css';

const useStyles = makeStyles(theme =>({
    button: {
        margin: theme.spacing(1),
        width: "100%",
        fontSize: 'large',
    },
    rightIcon: {
        marginLeft: theme.spacing(2),
    },
}));

function NewButton({name, parkCode}){
    const classes = useStyles();

    function handleSubmit(){
        setLoading(true);
    }

    const [loading, setLoading] = React.useState(false);
    return(
        <a id="hitbox" href={`/details?objectId=${parkCode}`}>
            <Button color="primary" className={classes.button} variant="contained" onClick={handleSubmit}>
                {`Learn more about ${name}`}
                <FlightIcon className={classes.rightIcon}/>
            </Button>
            <Fade in={loading}>
                <LinearProgress style={{
                    width: "100%",
                    position: "relative",
                }}/>
            </Fade>
        </a>
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
                    <Typography paragraph color="textSecondary" className="search-p">
                        <Highlight className="ais-Highlight-details" attribute="description" hit={props.hit}/>
                    </Typography>
                    <NewButton name={hit.fullName} parkCode={hit.parkCode}/>
                </Paper>
            </Card>
        )
    }
}

export default Hit;