
'use strict'
//console.log('Working!');

const cols = document.querySelectorAll('.square');

document.addEventListener('keydown', (event) => {
  
  event.preventDefault(); // TODO - disable default key behavior
  
  if (event.code.toLowerCase() === 'space') {
    setRandomColors();
  }
  //console.log(event.code);
  
});


// TODO - button (syntax variant)
/*
const button = document.querySelector('button'); 
const span = document.querySelector('span');

button.addEventListener('click', (event) => {  
    
  if (event.target.tagName.toLowerCase() === 'button' 
    || event.target.tagName.toLowerCase() === 'span') { 
    //console.log(button); 
    //console.log(span);
    setRandomColors();
  }
  
  //setRandomColors();
  
});
*/ 

// TODO - button (syntax variant)

const button = document.querySelector('button');
button.addEventListener('click', setRandomColors);

//

document.addEventListener('click', (event) => {
  //console.log(event.target.dataset);
  const type = event.target.dataset.type;
  if (type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'span'
      ? event.target
      : event.target.children[0];   
      
      //console.log(type);
      //console.log(node);
    
    node.classList.toggle('color-selected-cancel');
    node.classList.toggle('color-selected');
  } 
  
});


// color random generation function:
function generateRandomColor() {
  
  const hexCodes = '0123456789ABCDEF';
  let color = '';                                       
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]; // "math.random mdn"   
  }
  return '#' + color;  
  
}


function setRandomColors() {
  
  cols.forEach((col) => {
    const isLocked = col.querySelector('span').classList.contains('color-selected');
    const color = generateRandomColor();  
    
    if (isLocked) {
      return;
    }
    
    col.style.background = color; 
    
  });

}


setRandomColors();


