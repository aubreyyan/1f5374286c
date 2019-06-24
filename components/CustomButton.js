import React from 'react';
import {
    Button,
    Fade,
    LinearProgress,
} from "@material-ui/core";
import LocationIcon from '@material-ui/icons/LocationSearchingOutlined';
import searchClient from './api/SearchClient';

const index = searchClient.initIndex("Parks");

class ButtonComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            parkData: null,
            counter: 0,
        };
    }
    render(){
        const loading = this.state.loading;
        return(
            <div>
                <Fade in={loading}>
                    <LinearProgress style={{position: "relative", bottom: "-79vh"}}/>
                </Fade>
                <Button color="secondary" variant="contained" size="large" onClick={this.handleSubmit} style={{
                    width: "100%",
                    fontSize: 30,
                    color: "#FFFFFF",
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                }}>
                    Find the nearest point of interest
                    <LocationIcon style={{
                        paddingLeft: '10px',
                    }} />
                </Button>
            </div>
        )
    }

    showPosition = (position) => {
        this.setState(state => ({
            userlat: position.coords.latitude,
            userlong: position.coords.longitude,
        }));
        this.handleSubmit();
    };

    getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            alert("Geolocation isn't supported by device hardware.");
        }
    };

    indexData = () => {
        const browser = index.browseAll("", {
            attributesToRetrieve:[
                'latLong',
                'parkCode',
            ]
        });
        let hits = [];

        browser.on('result', content => {
            hits = hits.concat(content.hits);
            this.state.parkData = hits;
            this.handleSubmit();
        });

        browser.on('end', () => {
            console.log(`${hits.length} total responses.`);
        });

        browser.on('error', err => {
            throw err;
        });
    };

    calculateDistance = (coords) => {
        return coords.length > 1 ? Math.sqrt(Math.pow(coords[1] - this.state.userlong, 2) + Math.pow(coords[0] - this.state.userlat, 2)) : 360;
    };

    handleSubmit = () => {
        this.setState(state => ({
            loading: true,
            counter: this.state.counter + 1,
        }));
        if(this.state.counter > 0){
            alert("There may have been a problem locating your device. Make sure location services are enabled in system and in browser.")
        }
        if(this.state.userlat == null || this.state.userlong == null){
            this.getLocation();
            return false;
        }

        if(this.state.parkData == null){
            this.indexData();
            return false;
        }

        var nearestPOI = {
            parkCode: null,
            distance: 360.0
        };
        for (var i = 0; i < this.state.parkData.length; i++){
            const parkCoords = this.state.parkData[i].latLong.replace(/[^\d.,-]/g, '').split(",").map(Number);
            const parkDistance = this.calculateDistance(parkCoords);
            if (parkDistance < nearestPOI.distance){
                nearestPOI.parkCode = this.state.parkData[i].parkCode;
                nearestPOI.distance = parkDistance;
            }
        }
        window.location.href = "/details?objectId=" + nearestPOI.parkCode;
    }
}

export default ButtonComponent;