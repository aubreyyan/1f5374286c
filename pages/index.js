import React from 'react';
import AppBar from '../components/AppBar';
import {
    InstantSearch,
    InfiniteHits
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import Hit from '../components/Hit';

const searchClient = algoliasearch(
    'CNVK9PPZLI',
    '1e7524644d5732b65372e85998c98132'
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

class Index extends React.Component{
    render(){
        return(
            <div>
                <InstantSearch indexName="Parks" searchClient={proxyClient}>
                    <AppBar/>
                    <InfiniteHits hitComponent={Hit} />
                </InstantSearch>
            </div>
        )
    }
}

export default Index;