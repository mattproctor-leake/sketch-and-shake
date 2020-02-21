console.log('it works');

// declare elements

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

// set up canvas for drawing

// make vairable called height and width from properties on canvas
const {width, height} = canvas;

//create random x and y value for staring point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// start the drawing 
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({key}) {
    //increment hue
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
console.log(key);
// start the path
ctx.beginPath();
ctx.moveTo(x, y);

switch(key) {
    case 'ArrowUp':
        y -= MOVE_AMOUNT;
        break;
        dsds
    case 'ArrowDown':
        y += MOVE_AMOUNT;
        break;
    case 'ArrowLeft': 
        x -= MOVE_AMOUNT;
        break;
        case 'ArrowRight':
        x += MOVE_AMOUNT;
        break;
        default:
        break;

}

ctx.lineTo(x,y);
ctx.stroke();
}

// write handler
function handleKey(e) {
    
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
    
    }
}

// shake function

function clearCanvas () {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function () {
        canvas.classList.remove('shake');
    } ,{once: true} );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);