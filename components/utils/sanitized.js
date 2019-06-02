function sanitized(string){
    return string.replace(/(&nbsp;|<([^>]+)>)/ig, "");
}

export default sanitized;