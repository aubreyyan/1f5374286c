import React from 'react';
import AppBar from '../components/AppBar';
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from '@material-ui/styles';
import {
    InstantSearch,
    InfiniteHits
} from 'react-instantsearch-dom';
import Hit from '../components/Hit';
import CustomButton from '../components/CustomButton';
import searchClient from '../components/SearchClient';

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

const theme = createMuiTheme({
    palette:{
        primary:{
            main: "#0096db",
        },
        secondary:{
            main: "#29c609",
        },
    },
    typography:{
        fontFamily: [
            'Avenir',
            'Arial',
        ].join(','),
    },
});



class Index extends React.Component{
    render(){
        return(
            <div>
                <ThemeProvider theme={theme}>
                <InstantSearch indexName="Parks" searchClient={proxyClient}>
                    <AppBar/>
                    <br/><br/>
                    <InfiniteHits hitComponent={Hit} />
                </InstantSearch>
                    <br/>
                <CustomButton/>
                </ThemeProvider>
            </div>
        )
    }
}

export default Index;