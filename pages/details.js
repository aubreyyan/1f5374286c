import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/NPS_Query';
import fetch from 'isomorphic-unfetch';

const Details = withRouter( props => (
    <ResponsiveDrawer name={props.parks.data[0].fullName + " Details"} park={props.router.query.objectId}/>
));

Details.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId));
    const parks = await res.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks};
};

export default Details;