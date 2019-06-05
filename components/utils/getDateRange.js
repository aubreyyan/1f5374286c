import toDate from "./convertStringToDate";
import getReadableDate from "./getReadableDate";

function getDateRange(start, end){
    const startDateObj = toDate(start);
    const endDateObj = toDate(end);
    if(endDateObj != null && endDateObj < startDateObj){
        return "";
    }
    const newStartDate = getReadableDate(startDateObj);
    if(newStartDate != null){
        if(endDateObj != null && startDateObj < endDateObj){
            return newStartDate + " - " + getReadableDate(endDateObj);
        }
        else{
            return newStartDate;
        }
    }
    else if(endDateObj != null){
        return "Ends " + getReadableDate(endDateObj);
    }
    else{
        return "";
    }
}

export default getDateRange;