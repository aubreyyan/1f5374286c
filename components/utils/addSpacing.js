function addSpacing(states){
    if(states == null){
        return "";
    }
    var final = "";
    for(var i = 0; i < states.length; i++){
        if(states.substring(i, i + 1) === ","){
            final += ", ";
        }
        else{
            final += states.substring(i, i + 1);
        }
    }
    return final;
}

export default addSpacing;