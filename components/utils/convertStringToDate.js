function toDate(formattedDate){
    try{
        const [year, month, day] = formattedDate.split("-");
        const newDate = new Date(year, month - 1, day);
        return (parseInt(year) > 0 && 0 < parseInt(month) && parseInt(month) < 13 && 0 < parseInt(day) && parseInt(day) < 32) ? newDate : null;
    }
    catch (e) {
        return null;
    }
}

export default toDate;