const NPS_API_KEY = "0r8qcdfPgTUOtlMh61V1swRF7EtRtcgvaSuYfJiQ";

function NPS_Query(endpoint, parkCode){
    return "https://developer.nps.gov/api/v1/" + endpoint + "?parkCode=" + parkCode + "&api_key=" + NPS_API_KEY;
}

export default NPS_Query;