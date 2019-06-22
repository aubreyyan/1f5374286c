/**
 * @return {string}
 */
function JSONtoString(json){
    if(json == null || typeof json !== "object"){
        return "";
    }
    let str = "";
    for(let key in json){
        str += " " + key + " " + json[key];
    }
    return str.slice(1);
}

export default JSONtoString;