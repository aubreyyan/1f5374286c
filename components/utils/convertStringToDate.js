function toDate(formattedDate){
    try{
        const [year, month, day] = formattedDate.split("-");
        return new Date(year, month - 1, day);
    }
    catch (e) {
        return null;
    }

}

export default toDate;