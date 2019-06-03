import React from 'react';
import AppBar from '../components/AppBar';
import InfiniteHits from '../components/InfiniteHits';
import Hit from '../components/Hit';
import CustomButton from '../components/CustomButton';
import searchClient from '../components/api/SearchClient';
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from '@material-ui/styles';
import {InstantSearch} from 'react-instantsearch-dom';
import '../static/default.css';

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
    componentDidMount() {
        document.title = "National Park Search";

    }

    render(){
        return(
            <section style={{
                width: "100%",
                height: "95vh",
                backgroundImage: "url(../static/rocky-mountain-national-park-desktop-background.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}>
                <ThemeProvider theme={theme}>
                    <InstantSearch indexName="Parks" searchClient={proxyClient}>
                        <AppBar/>
                        <br/><br/>
                        <InfiniteHits hitComponent={Hit} />
                    </InstantSearch>
                    <br/>
                    <CustomButton/>
                </ThemeProvider>
            </section>
        )
    }
}

export default Index;