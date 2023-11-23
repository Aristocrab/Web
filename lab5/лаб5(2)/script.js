const table = document.getElementById("interactiveTable");
const colorPicker = document.getElementById("colorPicker");
let selectedCell = null;

function createTable() {
    for (let i = 1; i <= 6; i++) {
        const row = table.insertRow();
        for (let j = 1; j <= 6; j++) {
            const cell = row.insertCell();
            cell.textContent = (i - 1) * 6 + j;
            cell.addEventListener("mouseover", handleMouseOver);
            cell.addEventListener("click", handleClick);
            cell.addEventListener("dblclick", handleDoubleClick);
        }
    }
}

function handleMouseOver(event) {
    const randomColor = getRandomColor();
    event.target.style.backgroundColor = randomColor;
}

function handleClick(event) {
    const selectedColor = colorPicker.value;
    event.target.style.backgroundColor = selectedColor;
    selectedCell = event.target;
}

function handleDoubleClick() {
    const cells = document.getElementsByTagName("td");
    const selectedColor = colorPicker.value;
    for (const cell of cells) {
        if (cell !== selectedCell) {
            cell.style.backgroundColor = selectedColor;
        }
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
createTable()