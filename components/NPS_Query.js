const NPS_API_KEY = "dO9vSk0ifbKf9pN3G9QwjG2dNI8JsMyd5S0jDp5h";

function NPS_Query(endpoint, parkCode){
    return "https://developer.nps.gov/api/v1/" + endpoint + "?limit=500&parkCode=" + parkCode + "&api_key=" + NPS_API_KEY;
}

export default NPS_Query;