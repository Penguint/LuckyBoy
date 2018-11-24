function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

}

window.onload = function () {
    getJSON("init.json", (text) => {
        console.log(text);
    });
}