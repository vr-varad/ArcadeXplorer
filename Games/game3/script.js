const inputColor = document.querySelector('.color')
const tools = document.querySelectorAll('.tool')
const heading = document.querySelector('.heading')
let selectedColor;
inputColor.addEventListener('input',()=>{
  selectedColor = inputColor.value;
  tools.forEach(tool => {
    tool.style.color = selectedColor
  })

})

// Select the sliders
const squareSlider = document.querySelector('.squareslider');
const circleSlider = document.querySelector('.circleslider');
const pencilSlider = document.querySelector('.pencilslider');
const lineWeight = document.querySelector('.weightSlider')

// Initialize variables
let squareLength = squareSlider.value;
let circleLength = circleSlider.value;
let pencilLength = pencilSlider.value;
let weight = lineWeight.value
// Add event listeners for input changes
squareSlider.addEventListener('input', () => {
  squareLength = squareSlider.value;
  document.querySelector('.squareSide').textContent = squareLength
});

circleSlider.addEventListener('input', () => {
  circleLength = circleSlider.value;
  document.querySelector('.circleRadius').textContent = circleLength
});

pencilSlider.addEventListener('input', () => {
  pencilLength = pencilSlider.value;
  document.querySelector('.strokeWeight').textContent = pencilLength
  
});
lineWeight.addEventListener('input', () => {
  weight = lineWeight.value;
  document.querySelector('#weight').textContent = weight  
});

//shapes
const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const pencil = document.querySelector('.pencil');
// Canvas
const element = document.getElementById('mycanvas');
const ctx = element.getContext('2d');

let drawingShape = 'square'; // Initialize with the default shape

// Event listener for shape buttons (e.g., square, circle)
square.addEventListener('click', () => {
  drawingShape = 'square';
});

circle.addEventListener('click', () => {
  drawingShape = 'circle';
});
pencil.addEventListener("click", () => {
  drawingShape = 'pencil';
});

// Event listener for canvas
element.addEventListener('mousedown', (info) => {
  const x = info.offsetX;
  const y = info.offsetY;

  // Clear the canvas if needed (you can choose when to clear)
  // ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
  console.log(drawingShape)
  ctx.beginPath();
  if (drawingShape === 'square') {
    ctx.rect(x, y, squareLength, squareLength);
    ctx.strokeStyle = selectedColor
    ctx.lineWidth = weight
  } else if (drawingShape === 'circle') {
    ctx.arc(x, y, circleLength, 0, Math.PI * 2);
    ctx.lineWidth = weight
    ctx.strokeStyle = selectedColor
  }else if (drawingShape === 'pencil'){
    console.log('jello')
    let isDrawing = true;
      if (isDrawing) {
        const x = info.offsetX;
        const y = info.offsetY;
        console.log(x,y)
        ctx.moveTo(x, y);
        ctx.lineWidth = pencilLength
        ctx.strokeStyle = selectedColor
      }
    element.addEventListener("mousemove", (info) => {
      if (isDrawing) {
        const x = info.offsetX;
        const y = info.offsetY;

        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });

    element.addEventListener("mouseup", () => {
      isDrawing = false;
      ctx.closePath();
    });
  }
  ctx.stroke();
  
});

// eraser
const eraser =  document.querySelector('.eraser')
eraser.addEventListener('click',()=>{
  console.log('hel')
  ctx.clearRect(0,0,mycanvas.width,mycanvas.height)
})