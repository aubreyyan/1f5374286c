function getTimeRange(start, end){
    if(start != null && start.length > 0){
        if(end != null && end.length > 0){
            return start + " - " + end;
        }
        else{
            return start;
        }
    }
    else{
        if(end != null && end.length > 0){
            return "Ends at " + end;
        }
        else{
            return "";
        }
    }
}

export default getTimeRange;