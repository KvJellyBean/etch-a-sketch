const controller = document.querySelector('.controller');
const workstation = document.querySelector('.container');

const colorPicker = document.querySelector('#colorPicker');
const colorButton = document.querySelector('#colorButton');
const rainbowButton = document.querySelector('#rainbowButton');
const brightenButton = document.querySelector('#brightenButton');
const darkenButton = document.querySelector('#darkenButton');
const eraserButton = document.querySelector('#eraserButton');
const clearButton = document.querySelector('#clearButton');
const gridRange = document.querySelector('.controller #gridRange');
let gridSizeText = document.querySelector('label#gridText');

function createGrid(gridSize) {
    workstation.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.style.backgroundColor = '#F4F1EB';
            workstation.append(div);
        }
    }
}

/* Event handler for page when DOM fully load 
    Output the value of grid size from range input
    Create the grid into workstation*/
document.addEventListener('DOMContentLoaded', () => {
    const rangeValue = gridRange.value;
    gridSizeText.innerText = `Grid Size: ${rangeValue} x ${rangeValue}`;
    colorButton.classList.add('active');

    createGrid(rangeValue);
});

// Event handler when hovering in the grid container/workstation
workstation.addEventListener('mouseover', (e) => {
    // Coloring with Color brush
    if (colorButton.classList.contains('active')) {
        e.target.style.backgroundColor = colorPicker.value;
    }
    // Coloring with Rainbow Brush
    else if (rainbowButton.classList.contains('active')) {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    // Brighten button functionality - take the rgb and reduce them
    else if (brightenButton.classList.contains('active')) {
        const inputColor = e.target.style.backgroundColor;
        let r = parseInt(inputColor.split(',')[0].slice(4));
        let g = parseInt(inputColor.split(',')[1]);
        let b = parseInt(inputColor.split(',')[2]);
        r += 15;
        g += 15;
        b += 15;
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    // Darken button functionality - take the rgb and reduce them
    else if (darkenButton.classList.contains('active')) {
        const inputColor = e.target.style.backgroundColor;
        let r = parseInt(inputColor.split(',')[0].slice(4));
        let g = parseInt(inputColor.split(',')[1]);
        let b = parseInt(inputColor.split(',')[2]);
        r -= 15;
        g -= 15;
        b -= 15;
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    // Use an eraser
    else if (eraserButton.classList.contains('active')) {
        e.target.removeAttribute('style');
    }
});

// Event handler for giving the button an 'active' class when it is active
controller.addEventListener('click', (e) => {
    const childrenController = e.target.parentNode.children;

    if (e.target.tagName == 'BUTTON' && e.target.id != 'clearButton') {
        Array.from(childrenController).forEach(child => {
            child.classList.remove('active');
        });
        e.target.classList.add('active');
    }
});

// Event handler for button "Clear Workstation"
clearButton.addEventListener('click', () => {
    /*Convert object type of workstation's children into array, and loop them to remove style attribute*/
    Array.from(workstation.children).forEach(item => {
        item.style.backgroundColor = '#F4F1EB';
    })
});

// Event handler for range input when it's value changed
gridRange.addEventListener('change', () => {
    const rangeValue = gridRange.value;

    workstation.style.gridTemplateRows = `repeat(${rangeValue}, 1fr)`;
    workstation.style.gridTemplateColumns = `repeat(${rangeValue}, 1fr)`;

    gridSizeText.innerText = `Grid Size: ${rangeValue} x ${rangeValue}`;

    createGrid(rangeValue);
});
