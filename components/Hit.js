import React, {useEffect, useState} from 'react';
import {Highlight} from "react-instantsearch-dom";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import {makeStyles} from "@material-ui/styles";
import '../static/default.css';
import algoliasearch from "algoliasearch";

const searchClient = algoliasearch(
    'CNVK9PPZLI',
    '1e7524644d5732b65372e85998c98132'
);

const index = searchClient.initIndex("Parks");

const useStyles = makeStyles({
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
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function indexSearch(objId){
    return new Promise((resolve, reject) => {
        index.getObject(objId, ['fullName'], (err, content) => {
            if (content != null){
                resolve(content.fullName);
            }
            else{
                reject(Error());
            }
        });
    });
}

function NewButton({redirectId}){
    const classes = useStyles();
    const [someVar, setSomeVar] = useState(null);
    useEffect(() => {
        indexSearch(redirectId).then(result => {
            setSomeVar(result);
        })
    }, []);
    if(!someVar){
        return null;
    }
    return(
        <Link as={`/details/${redirectId}`} href={`/details?objectId=${redirectId}`}>
            <a>
                <button type="button" className={classes.root}>
                    {`Learn more about ${someVar}`}
                </button>
            </a>
        </Link>
    )
}

class Hit extends React.Component{

    render() {
        const props = this.props;
        return(

            <Card>
                <Paper id="paper" square>
                    <Typography id="title" color="textPrimary" variant="h6">
                        <Highlight className="ais-Highlight-header" attribute="fullName" hit={props.hit}/>
                        <Highlight className="ais-Highlight-state" attribute="states" hit={props.hit}/>
                    </Typography>
                </Paper>
                <Paper square>
                    <Typography color="textSecondary" variant="h6">
                        <Highlight attribute="description" hit={props.hit}/>
                    </Typography>
                </Paper>
                <NewButton redirectId={props.hit.objectID}/>
            </Card>
        )
    }
}

export default Hit;