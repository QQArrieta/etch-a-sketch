function clearGrid(){
    let cells = document.querySelectorAll(".colored");
    cells.forEach(cell  => {
        cell.classList.remove("colored");
    });
}
let slider = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = `${slider.value}`+`x`+`${slider.value}`;

slider.oninput = function(){ output.innerHTML = `${this.value}`+ `x`+ `${this.value}`};
let x = slider.value;
let grid = `repeat(` + x + `, 1fr)`;
let container = document.getElementById("container");
container.style.gridTemplateColumns = grid;
container.style.gridTemplateRows = grid;
let toAdd = document.createDocumentFragment();
for(let i=0; i < (x*x); i++)
{
let newDiv = document.createElement('div');
newDiv. addEventListener("mouseover", () => newDiv.classList.add("colored"));
newDiv.className = 'cells';
toAdd.appendChild(newDiv);
}
container.appendChild(toAdd);

slider.addEventListener("change", function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, rgb(166, 75, 42)` + x + `%, rgb(214, 214, 214)` + x + `%)`;
    slider.style.background = color;
    const cells = document.querySelectorAll(".colored");
    cells.forEach(cell  => {
        cell.classList.remove("colored");
    });
    let grid = `repeat(` + x + `, 1fr)`;
    let container = document.getElementById("container");
    container.style.gridTemplateColumns = grid;
    container.style.gridTemplateRows = grid;
    let toAdd = document.createDocumentFragment();
    for(let i=0; i < (x*x); i++)
    {
    let newDiv = document.createElement('div');
    newDiv. addEventListener("mouseover", () => newDiv.classList.add("colored"));
    newDiv.className = 'cells';
    toAdd.appendChild(newDiv);
    }
    container.appendChild(toAdd);
})

