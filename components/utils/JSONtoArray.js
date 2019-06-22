function JSONtoArray(json){
    if(json == null || typeof json !== "object"){
        return [];
    }
    let arr = [];
    for(let key in json){
        arr.push([key, json[key]]);
    }
    return arr;
}

export default JSONtoArray;