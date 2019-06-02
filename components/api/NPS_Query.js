const NPS_API_KEY = "gOJHaZXfgB8nDAEcIoLNfu2ZmhGpXQ1GrEHX5kwM";

function NPS_Query(endpoint, parkCode){
    return "https://developer.nps.gov/api/v1/" + endpoint + "?limit=500&parkCode=" + parkCode + "&api_key=" + NPS_API_KEY;
}

export default NPS_Query;