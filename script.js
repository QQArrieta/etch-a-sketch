function clearGrid(){
    let cells = document.querySelectorAll(".cells");
    cells.forEach(cell  => {
        cell.style.backgroundColor = `rgb(255,255,255)`;
    });
}
let slider = document.getElementById("myRange");
let output = document.getElementById("value");
let rSlider = document.getElementById("RRange");
let rOutput = document.getElementById("Rvalue");
rOutput.innerHTML = rSlider.value;
rSlider.oninput = function(){ rOutput.innerHTML = this.value};
rSlider.addEventListener("change", function(){
    let r = rSlider.value;
    let rColor = `rgb(${r}, ${gSlider.value}, ${bSlider.value})`;
    rSlider.style.background = rColor;
    gSlider.style.background = rColor;
    bSlider.style.background = rColor;
});
let gSlider = document.getElementById("GRange");
let gOutput = document.getElementById("Gvalue");
gOutput.innerHTML = gSlider.value;
gSlider.oninput = function(){ gOutput.innerHTML = this.value};
gSlider.addEventListener("change", function(){
    let g = gSlider.value;
    let gColor = `rgb(${rSlider.value}, ${g}, ${bSlider.value})`;
    gSlider.style.background = gColor;
    rSlider.style.background = gColor;
    bSlider.style.background = gColor;
});
let bSlider = document.getElementById("BRange");
let bOutput = document.getElementById("Bvalue");
bOutput.innerHTML = bSlider.value;
bSlider.oninput = function(){ bOutput.innerHTML = this.value};
bSlider.addEventListener("change", function(){
    let b = bSlider.value;
    let bColor = `rgb(${rSlider.value}, ${gSlider.value}, ${b})`;
    bSlider.style.background = bColor;
    rSlider.style.background = bColor;
    gSlider.style.background = bColor;
});
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
newDiv. addEventListener("mouseover", () =>  newDiv.style.backgroundColor = `rgb(${rSlider.value}, ${gSlider.value}, ${bSlider.value})`);
    newDiv.className = 'cells';
    toAdd.appendChild(newDiv);
}
container.appendChild(toAdd);
slider.addEventListener("change", function(){
    let x = slider.value;
    let color = `linear-gradient(90deg, rgb(166, 75, 42)` + x + `%, rgb(214, 214, 214)` + x + `%)`;
    slider.style.background = color;
    clearGrid();
    let grid = `repeat(` + x + `, 1fr)`;
    let container = document.getElementById("container");
    container.style.gridTemplateColumns = grid;
    container.style.gridTemplateRows = grid;
    let toAdd = document.createDocumentFragment();
    for(let i=0; i < (x*x); i++)
    {
    let newDiv = document.createElement('div');
    newDiv. addEventListener("mouseover", () => newDiv.style.backgroundColor = `rgb(${rSlider.value}, ${gSlider.value}, ${bSlider.value})`);
    
    newDiv.className = 'cells';
    toAdd.appendChild(newDiv);
    }
    container.appendChild(toAdd);
})
