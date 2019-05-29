import React from 'react';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import LinearProgress from '@material-ui/core/LinearProgress';
import LocationIcon from '@material-ui/icons/LocationSearchingOutlined';
import searchClient from '../components/SearchClient';

const index = searchClient.initIndex("Parks");

class ButtonComponent extends React.Component{
    state = {
        loading: false,
        userlat: null,
        userlong: null,
        parkData: null,
    };
    render(){
        const loading = this.state.loading;
        return(
            <div>
                <Button color="secondary" variant="contained" size="large" onClick={this.handleSubmit} style={{
                    width: "100%",
                    fontSize: 30,
                    color: "#FFFFFF"
                }}>
                    Find the nearest point of interest
                    <LocationIcon style={{
                        paddingLeft: '10px',
                    }} />
                </Button>
                <Fade in={loading}>
                    <LinearProgress/>
                </Fade>
            </div>
        )
    }

    showPosition = (position) => {
        console.log('3');
        this.setState(state => ({
            userlat: position.coords.latitude,
            userlong: position.coords.longitude,
        }));
        this.handleSubmit();
    };

    showError = (err) => {
        console.warn('error');
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
        if (coords.length < 2){
            return 360;
        }
        else{
            return Math.sqrt(Math.pow(coords[1] - this.state.userlong, 2) + Math.pow(coords[0] - this.state.userlat, 2));
        }
    };

    handleSubmit = () => {
        this.setState(state => ({
            loading: true
        }));
        if(this.state.userlat == null || this.state.userlong == null){
            this.getLocation();
            return false;
        }
        console.log(this.state.userlat);
        console.log(this.state.userlong);
        if(this.state.parkData == null){
            this.indexData();
            return false;
        }
        console.log(this.state.parkData);
        var nearestPOI = {
            parkCode: null,
            lat: 180.0,
            long: 360.0,
            distance: 360.0
        };
        for (var i = 0; i < this.state.parkData.length; i++){
            const parkCoords = this.state.parkData[i].latLong.replace(/[^\d.,-]/g, '').split(",").map(Number);
            const parkDistance = this.calculateDistance(parkCoords);
            if (parkDistance < nearestPOI.distance){
                nearestPOI.parkCode = this.state.parkData[i].parkCode;
                nearestPOI.lat = parkCoords[0];
                nearestPOI.long = parkCoords[1];
                nearestPOI.distance = parkDistance;
            }
        }
        console.log(nearestPOI.parkCode);
        window.location.href = "/details?objectId=" + nearestPOI.parkCode;
    }
}

export default ButtonComponent;