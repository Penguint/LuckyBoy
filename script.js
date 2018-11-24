function getJSON(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    return(xhr.responseText);
}

window.onload = function() {
    console.log(getJSON("/init.json"));
}