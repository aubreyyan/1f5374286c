import convertStringToDate from './convertStringToDate';

function parseDate(string){
    if(string == null || typeof string !== "string"){
        return null;
    }
    let final = "";
    let dateMode = false;
    for(let i = 0; i < string.length; i++){
        if(dateMode && string.slice(i, i + 1) === " "){
            return convertStringToDate(final);
        }
        else if(!dateMode && string.slice(i, i + 1) !== " " && !isNaN(string.slice(i, i + 1))){
            dateMode = true;
        }
        if(dateMode){
            final += string.slice(i, i + 1);
        }
    }
    return convertStringToDate(string);
}

export default parseDate;