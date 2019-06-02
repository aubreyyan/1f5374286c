function getList(string, format){
    var final = [];
    if(format === "number"){
        var curr = "2.";
        var index = 0;
        for(var i = 0; i < string.length - 1; i++){
            if(string.substring(i, i + 2) === curr){
                curr = (parseInt(curr.substring(0, 1)) + 1).toString() + ".";
                final.push(string.substring(index, i));
                index = i;
            }
        }
        final.push(string.substring(index));
        return final;
    }
    else if(format === "ccss"){
        var temp = "";
        var inCCSS = false;
        for(var i = 0; i < string.length; i++){
            if(inCCSS && (string.substring(i, i + 1) === "\n" || string.substring(i, i + 1) === " ")){
                final.push(temp);
                temp = "";
                inCCSS = false;
            }
            else{
                temp += string.substring(i, i + 1);
                if(temp.length > 1 && temp.substring(0, 2) === "CC"){
                    inCCSS = true;
                }
            }
        }
        final.push(temp);
        return final;
    }
}

export default getList;