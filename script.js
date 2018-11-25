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
        newRow.content.querySelector(".selected").childNodes[1].checked = member.selected;
        newRow.content.querySelector(".name").childNodes[1].value = member.name;
        newRow.content.querySelector(".weight").childNodes[1].value = member.weight;
        table.appendChild(document.importNode(newRow.content, true));
    })
}

function printResultList(memberList, table) {
    var newRow = document.querySelector("template.result-row");

    memberList.forEach(member => {
        // newRow.content.querySelector(".selected").childNodes[1].checked = member.selected;
        newRow.content.querySelector(".name").childNodes[1].innerHTML = member.name;
        // newRow.content.querySelector(".weight").childNodes[1].value = member.weight;
        table.appendChild(document.importNode(newRow.content, true));
    })
}

function choose(memberList, num) {
    var selectedMemberList = [];
    
    // filter
    memberList.forEach(e => {
        if (e.selected) {
            selectedMemberList.push(e);
        }
    })

    // initially shuffle
    selectedMemberList.forEach(e => {
        e.sortValue = Math.random();
    })
    selectedMemberList.sort((a, b) => {
        return b.sortValue - a.sortValue;
    })

    // sort
    selectedMemberList.forEach(e => {
        e.sortValue = e.weight * Math.random();
    })
    selectedMemberList.sort((a, b) => {
        return b.sortValue - a.sortValue;
    })
    return(selectedMemberList.slice(0, num));
}

window.onload = function () {
    // console.log(document.querySelector("#input-number-of-places").defaultValue);
    getJSON("init.json", profileList => {
        // console.log(profileList);
        var memberList = parseToMemberList(profileList);
        // console.log(memberList);
        var memberTable = document.querySelector("table.member-list tbody");
        printMemberList(memberList, memberTable);

        var num = document.querySelector("#input-number-of-places").value;

        var resultTable = document.querySelector("table.result-list tbody");
        document.querySelector(".generate-btn").onclick = () => {
            printResultList(choose(memberList, num), resultTable);
        }
    });
}