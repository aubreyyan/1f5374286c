function getReadablePhone(number){
    if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(number)){
        return "";
    }
    else if(number.length < 12){
        return number.substring(0, 3) + "-" + number.substring(3, 6) + "-" + number.substring(6);
    }
    else{
        return number;
    }
}

export default getReadablePhone;