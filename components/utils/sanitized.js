function sanitized(string){
    return (string == null || string.constructor !== String) ? "" : string.replace(/(&nbsp;|<([^>]+)>)/ig, "");
}

export default sanitized;