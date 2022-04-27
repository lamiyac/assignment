const accordionBtns = document.querySelectorAll(".item-header");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function() {
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            //this is if the accordion is open
            content.style.maxHeight = null;
        } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
        }
    };
});

(function setup() {
    "use strict";

    var sNameElem = document.getElementById("sName");
    var sDateElem = document.getElementById("sDate");
    var eDateElem = document.getElementById("eDate");
    var weekElem = document.getElementById("week");
    var tableElem = document.getElementById("table");
    document.getElementById("create").addEventListener("click", function() {
        var newRow = tableElem.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(sNameElem.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(1);
        newText = document.createTextNode(sDateElem.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(2);
        newText = document.createTextNode(eDateElem.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(3);
        newText = document.createTextNode(weekElem.value);
        newCell.appendChild(newText);
        sNameElem.value = "";
        sDateElem.value = "";
        eDateElem.value = "";
        weekElem.value = "";
        tableElem.value = "";
    });
})();