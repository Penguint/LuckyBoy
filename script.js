function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

}

window.onload = function () {
    getJSON("init.json", (json) => {
        console.log(json);
    });
}