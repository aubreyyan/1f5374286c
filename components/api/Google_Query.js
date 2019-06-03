const GOOGLE_API_KEY = "AIzaSyBQa3TN8TY501aB2H3Tr_m2ptPVNF-EqOM";

function Google_Query(latLong, campName, parkName, state, length, width, zoom){
    return `https://maps.googleapis.com/maps/api/staticmap?center=${(latLong.length > 0) ? latLong.replace(/[^\d.,-]/g, ''): campName.replace(/\s/g, '', "") + "," + parkName.replace(/\s/g, '', "") + "," + state}&zoom=${zoom}&size=${length}x${width}&scale=2&maptype=terrain&key=${GOOGLE_API_KEY}`;
}

export default Google_Query;