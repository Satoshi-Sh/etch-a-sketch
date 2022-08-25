const container = document.querySelector('.container');
const button = document.querySelector('button');

createCanvas();


// add trigger to refresh button;

button.addEventListener('click',popup)

// pop up function
function popup(){
    while (true){
    let n = prompt("Choose New Grid Number: (1-100)");
    n = parseInt(n)
    if (n >0 & n<=100){ 
        removeSquares();
        createCanvas(n); 
        break;
        }
    }
    return;
}

// remove square;
function removeSquares(){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
     row.remove();
    })

    
}


// make canvas
function createCanvas(num=32){
    for (let i = 0; i<num;i++){
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText='display:flex;justify-content:center;height:15px;margin:0px;border:0px;padding:0px;';
        for (let j = 0; j<num;j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover',changeColor);
        square.style.cssText = 'display:inline-block;background-color:black;height:15px;width:15px;margin:0px;border:0px;';
        row.appendChild(square);
        }
        container.appendChild(row);
        }
}


function getColor(){
    let num=Math.random();
    if(num <0.1) return 'black';
    else {
        const r = getRandomInt();
        const g = getRandomInt();
        const b = getRandomInt();
        return `rgb(${r},${g},${b})`
    }
}

function getRandomInt(max=255){
  return Math.floor(Math.random()*max)
}

function changeColor(e){
    e.target.style.backgroundColor = getColor();
    return;
}


