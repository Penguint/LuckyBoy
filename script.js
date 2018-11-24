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
    return (profileList);
}
function printMemberList(memberList, table) {
    var newRow = document.querySelector("template.member-row");

    memberList.forEach(member => {
        newRow.content.querySelector(".selected").childNodes[1].checked = member.selected ? "on" : "off";
        newRow.content.querySelector(".name").childNodes[1].value = member.name;
        newRow.content.querySelector(".weight").childNodes[1].value = member.weight;
        table.appendChild(document.importNode(newRow.content, true));
    })
}
window.onload = function () {
    getJSON("init.json", profileList => {
        // console.log(profileList);
        var memberList = parseToMemberList(profileList);
        // console.log(memberList);
        var memberTable = document.querySelector("table.member-list tbody");

        printMemberList(memberList, memberTable);
    });
}