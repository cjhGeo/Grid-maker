let loadFile = function (event) {
    let myImg = document.querySelector("img");
    myImg.src = URL.createObjectURL(event.target.files[0]);
}

function loadGrid() {
    document.querySelector("#gridCell").style.borderColor = String(document.querySelector("#colour").value);
    document.querySelector("#gridCell").style.borderWidth = String(document.querySelector("#gridWidth").value) + "px";

    let cellNo = (document.querySelector("#col").value * document.querySelector("#row").value) - 1;
    for (let i = 0; i < cellNo; i++) {
        var anchor = document.querySelector("#grid");
        var newType = document.querySelector("#gridCell").cloneNode(true)
        newType.id = "gridCell";
        anchor.appendChild(newType);
    }

    document.querySelector("#grid").style.gridTemplateColumns = "repeat(" + document.querySelector("#col").value + ", 1fr)";
    document.querySelector("#grid").style.gridTemplateRows = "repeat(" + document.querySelector("#row").value + ", 1fr)";

    document.querySelector("#grid").style.height = String(document.querySelector("img").naturalHeight) + "px";
    document.querySelector("#grid").style.width = String(document.querySelector("img").naturalWidth) + "px";
}