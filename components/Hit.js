import React from 'react';
import {Highlight} from "react-instantsearch-dom";
import '../static/default.css';

class Hit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latlong: null,
            code: null
        };
    }

    render() {
        const props = this.props;
        return(
            <a id="hitbox" href="/details" onClick={console.log()}>
                <img src={props.hit.image} align="left" alt={props.hit.name} />
                <div className="hit-name">
                    <Highlight className="ais-Highlight-header" attribute="fullName" hit={props.hit} />
                    <Highlight className="ais-Highlight-state" attribute="states" hit={props.hit} />
                </div>
                <p/>
                <div className="hit-description">
                    <Highlight attribute="description" hit={props.hit} />
                </div>
            </a>
        )
    }
    handleSubmit = (ll, c) => {
        this.setState({
            latlong: ll,
            code: c
        });
        console.log(this.props.children);
        alert(this.props);
    }

}



export default Hit;