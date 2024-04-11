let colors = [];

function addColor() {
    let colorInput = document.getElementById('colorPicker');
    let color = colorInput.value;
    colors.push(color);
    displayColors();
}

function displayColors() {
    let displayDiv = document.getElementById('colorDisplay');
    displayDiv.innerHTML = '';
    colors.forEach(color => {
        let colorBox = document.createElement('div');
        colorBox.style.backgroundColor = color;
        colorBox.classList.add('color-box');
        displayDiv.appendChild(colorBox);
    });
}

