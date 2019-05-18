import React from "react";
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import '../static/index.css';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
    'algolia-app-id',
    'algolia-api-key'
);

class Index extends React.Component {
    render() {
        return(
            <div className="ais-InstantSearch">
                <h1>React InstantSearch e-commerce demo</h1>
                <InstantSearch indexName="Parks" searchClient={searchClient}>
                    <div className="right-panel">
                        <SearchBox />
                        <Hits hitComponent={Hit} />
                        <Pagination />
                    </div>
                </InstantSearch>
            </div>)
    }
}

function Hit(props) {
    return (
        <div>
            <img src={props.hit.image} align="left" alt={props.hit.name} />
            <div className="hit-name">
                <Highlight attribute="fullName" hit={props.hit} />
            </div>
            <div className="hit-state">
                <Highlight attribute="states" hit={props.hit} />
            </div>
            <div className="hit-description">
                <Highlight attribute="description" hit={props.hit} />
            </div>
        </div>
    );
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

export default Index;