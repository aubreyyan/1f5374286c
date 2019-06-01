function getReadablePhone(number){
    if(number.length < 12){
        return number.substring(0, 3) + "-" + number.substring(3, 6) + "-" + number.substring(6);
    }
    else{
        return number;
    }
}

export default getReadablePhone;