const gridRange = document.querySelector('.controller #gridRange');
let gridSizeText = document.querySelector('label#gridText')
const workstation = document.querySelector('.container');

function createGrid(gridSize) {
    workstation.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
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

    createGrid(rangeValue);
});

// Event handler for range input when it's value changed
gridRange.addEventListener('change', () => {
    const rangeValue = gridRange.value;

    workstation.style.gridTemplateRows = `repeat(${rangeValue}, 1fr)`;
    workstation.style.gridTemplateColumns = `repeat(${rangeValue}, 1fr)`;

    gridSizeText.innerText = `Grid Size: ${rangeValue} x ${rangeValue}`;

    createGrid(rangeValue);
});