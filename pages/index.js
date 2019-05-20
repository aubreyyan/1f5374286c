import React from "react";
import {
    InstantSearch,
    SearchBox,
    InfiniteHits
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import '../static/default.css';
import algoliasearch from 'algoliasearch';
import Hit from '../components/Hit';

const searchClient = algoliasearch(
    'app_id',
    'api_key'
);

const proxyClient = {
    search(requests){
        if (requests.every(({params}) => !params.query)) {
            return Promise.resolve({
                results: requests.map(() => ({
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    processingTimeMS: 0,
                })),
            });
        }

        return searchClient.search(requests);
    },
};

class Index extends React.Component {
    render() {
        return(
            <div className="ais-InstantSearch">
                <InstantSearch indexName="Parks" searchClient={proxyClient}>
                    <div className="right-panel">
                        <SearchBox
                            reset={
                                <svg viewBox="200 198 108 122">
                                    <path d="M200.8 220l45 46.7-20 47.4 31.7-34 50.4 39.3-34.3-52.6 30.2-68.3-49.7 51.7" />
                                </svg>
                            }
                            translations={{
                                submitTitle: 'Submit',
                                resetTitle: 'Clear',
                                placeholder: 'Search for Destination by Name, State, and keywords...',
                            }}
                        />
                        <InfiniteHits hitComponent={Hit}/>
                    </div>
                </InstantSearch>
            </div>)
    }
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

export default Index;