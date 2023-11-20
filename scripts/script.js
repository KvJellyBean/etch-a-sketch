const gridRange = document.querySelector('.controller #grid');
const workstation = document.querySelector('.container');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            workstation.append(div);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rangeValue = gridRange.value;
    createGrid(rangeValue);
});