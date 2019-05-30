import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/NPS_Query';
import fetch from 'isomorphic-unfetch';

const NewsReleases = withRouter(props => (
    <ResponsiveDrawer name={props.parks.data[0].fullName + " News Releases"} park={props.router.query.objectId}/>
));

NewsReleases.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("newsreleases", objectId));
    const news = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, news};
};

export default NewsReleases;