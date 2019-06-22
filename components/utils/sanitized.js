function sanitized(string){
    return (string == null || string.constructor !== String) ? "" : string.replace(/(&nbsp;|<([^>]+)>)/ig, "").replace(/&amp;/g, "&");
}

export default sanitized;