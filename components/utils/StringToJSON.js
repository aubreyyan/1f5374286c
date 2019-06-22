function StringToJSON(string){
    if(string == null || typeof string !== "string"){
        return {};
    }
    let json = {};
    let arr = string.length > 0 ? string.split(" ") : [];
    for(let i = 0; i < arr.length; i+=2){
        json[arr[i]] = arr[i + 1];
    }
    return json;
}

export default StringToJSON;