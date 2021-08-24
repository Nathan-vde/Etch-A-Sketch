// Initial values
const box = 320;
let input = 16;

// Create grid
function creategrid(input){
    let body = document.querySelector('body');
    let delcontainer = document.getElementById("container");
    body.removeChild(delcontainer)
    let container = document.createElement('div'); // removing and adding to avoid creating multiple grids
    container.setAttribute('id', 'container');
    for (i = 0; i < input; i++){
        let row = document.createElement('div');
        row.style.display = 'flex';
        for (j = 0; j < input; j++){
            let block = document.createElement('div');
            block.style.backgroundColor = 'lightgrey'
            block.style.padding = `${box/input}px`;
            block.style.border = `${(box/10/input)}px solid white`
            row.appendChild(block);
            hover(block);
        }
        row.style.justifyContent = 'center'
        container.appendChild(row)
    ;}
    body.appendChild(container)
}

// Change color after hovering over the block with the mouse
function hover(block){
    block.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'grey';
    })
}

// Reset button with prompt for new size
let button = document.getElementById('reset');
button.addEventListener('click', function(e){
    let input = prompt("enter a size");
    if (input >= 100){
        input = 100
    }
    creategrid(input)
})

// Create initial grid
creategrid(input);
