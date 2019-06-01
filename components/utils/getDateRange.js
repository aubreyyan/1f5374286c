import toDate from "./convertStringToDate";
import getReadableDate from "./getReadableDate";

function getDateRange(start, end){
    const startDateObj = toDate(start);
    const endDateObj = toDate(end);
    const newStartDate = getReadableDate(startDateObj);

    if(endDateObj != null && start !== end){
        const newEndDate = getReadableDate(endDateObj);
        return newStartDate + " - " + newEndDate;
    }
    else{
        return newStartDate;
    }
}

export default getDateRange;