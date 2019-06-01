function sanitized(string, document){
    const temp = document.createElement("div");
    temp.innerHTML = string;
    return temp.textContent || temp.innerText;
}

export default sanitized;