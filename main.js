let loadFile = function (event) {
    let myImg = document.querySelector("img");
    myImg.src = URL.createObjectURL(event.target.files[0]);
}

function loadGrid() {
    document.querySelector("#grid").innerHTML = '<div class="gridCell" id="gridCell1" onclick="markSpot(this.id)"></div>';

    document.querySelector(".gridCell").style.borderColor = String(document.querySelector("#colour").value);
    document.querySelector(".gridCell").style.borderWidth = String(document.querySelector("#gridWidth").value) + "px";

    let cellNo = (document.querySelector("#col").value * document.querySelector("#row").value) - 1;
    for (let i = 0; i < cellNo; i++) {
        var anchor = document.querySelector("#grid");
        var newType = document.querySelector(".gridCell").cloneNode(true)
        newType.class = "gridCell";
        newType.id = "gridCell" + String(i + 2);
        anchor.appendChild(newType);
    }

    document.querySelector("#grid").style.gridTemplateColumns = "repeat(" + document.querySelector("#col").value + ", 1fr)";
    document.querySelector("#grid").style.gridTemplateRows = "repeat(" + document.querySelector("#row").value + ", 1fr)";

    document.querySelector("#grid").style.height = String(document.querySelector("img").naturalHeight) + "px";
    document.querySelector("#grid").style.width = String(document.querySelector("img").naturalWidth) + "px";
}

function markSpot(gridCell) {
    if (document.querySelector("#markerType").value == "cross") {
        if (document.querySelector("#" + String(gridCell)).innerHTML == "") {
            document.querySelector("#" + String(gridCell)).innerHTML = '<i class="fa-sharp fa-regular fa-xmark" style="outline: none; color: ' + String(document.querySelector("#markerColour").value) + ';"></i>';
        } else {
            document.querySelector("#" + String(gridCell)).innerHTML = ""
        }

        let totalGridWidth = (document.querySelector("#gridWidth").value > 1 ? (2 * (document.querySelector("#gridWidth").value)) : 2);
        console.log(totalGridWidth);
        let gridCellWidth = (((document.querySelector("img").naturalWidth) / (document.querySelector("#col").value) - totalGridWidth));
        let gridCellHeight = (((document.querySelector("img").naturalHeight) / (document.querySelector("#row").value) - totalGridWidth));

        document.querySelectorAll("i").forEach(i => {
            i.style.fontSize = (gridCellWidth < gridCellHeight ? (String(gridCellWidth) + "px") : (String(gridCellHeight) + "px"));
        });
    } else if (document.querySelector("#markerType").value == "fill") {
        document.querySelector("#" + String(gridCell)).style.backgroundColor = document.querySelector("#fillColour").value;
        document.querySelector("#" + String(gridCell)).style.opacity = document.querySelector("#fillOpacity").value;
    }
}

function checkHex(hexOf) {
    document.querySelector("#errorDiv").innerHTML = "The Hex Code(s) is/are not valid!";
    let fullHex = /^#[a-zA-Z0-9]{6}$/;
    let halfHex = /^#[a-zA-Z0-9]{3}$/;
    console.log((document.querySelector("#" + String(hexOf)).value.match(fullHex)));
    if (document.querySelector("#" + String(hexOf)).value.match(fullHex) || document.querySelector("#" + String(hexOf)).value.match(halfHex) || document.querySelector("#" + String(hexOf)).value == "") {
        document.querySelector("#errorDiv").innerHTML = "";
        console.log("Invalid!");
    }
}
