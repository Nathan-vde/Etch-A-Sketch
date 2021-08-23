let container = document.getElementById("container");
for (i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.style.display = 'flex';
    for (j = 0; j < 16; j++){
        let block = document.createElement('div');
        block.style.backgroundColor = 'black'
        block.style.padding = '22px'
        block.style.border = '2px solid white'
        row.appendChild(block);
    }
    row.style.justifyContent = 'center'
    container.appendChild(row)
;}

