function getList(string, format){
    var final = [];
    if(string == null || string.constructor !== String){
        return [""];
    }
    else if(format === "number"){
        var curr = "2.";
        var index = 0;
        for(var i = 0; i < string.length - 1; i++){
            if(string.substring(i, i + 2) === curr){
                curr = (parseInt(curr.substring(0, 1)) + 1).toString() + ".";
                final.push(string.substring(index, i).replace(/\s+$/g, ''));
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
                final.push(temp.replace(/\s/g, ''));
                temp = "";
                inCCSS = false;
            }
            else{
                temp += string.substring(i, i + 1);
                if(temp.length === 2 && temp.substring(0, 2) === "CC"){
                    inCCSS = true;
                }
            }
        }
        final.push(temp.replace(/\s/g, ''));
        return final;
    }
    else{
        return [""];
    }
}

export default getList;