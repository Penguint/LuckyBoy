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

function parseToMemberList(profileList) {
    profileList.forEach(member => {
        member.selected = true;
        member.weight = 1;
    });
    return(profileList);
}

window.onload = function () {
    getJSON("init.json", profileList => {
        // console.log(profileList);
        var memberList = parseToMemberList(profileList);
        console.log(memberList);
    });
}