

const canvas=document.getElementById("canvas");
const ctx =canvas.getContext("2d");
const colorP = document.getElementById("colorP");
const drawNew=document.getElementById("draw-new");

let draw = false;


function pressMouse(){
  draw = true;
}
 
function releaseMouse(){
  draw = false;
  canvas.style.cursor="default";
  ctx.beginPath();
 }
 
function getMousePos(canvas,event){
  let rect = canvas.getBoundingClientRect();
 
  return{
    x:event.clientX - rect.left,
    y:event.clientY - rect.top
  };
}

function drawParameters(canvas,posx,posy){
  if(!draw) return;

  ctx.strokeStyle = colorP.value;
  canvas.style.cursor="pointer";

  ctx.lineCap = "round";
  ctx.lineTo(posx, posy);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(posx, posy);
}

function drawing(event) {
  let mousePos = getMousePos(canvas,event);
  let posx = mousePos.x;
  let posy = mousePos.y;
  drawParameters(canvas,posx,posy);

}

function changeBrushSize() {
  const small = document.getElementById("brush-small");
  const medium = document.getElementById("brush-medium");
  const large = document.getElementById("brush-large");
  const xlarge = document.getElementById("brush-xlarge");

  small.addEventListener('click', () => {
    ctx.lineWidth = 1;
    small.style.border = "1px solid red";
    medium.style.border = "none";
    large.style.border = "none";
    xlarge.style.border = "none";
  });
  medium.addEventListener('click', () => {
    ctx.lineWidth = 3;
    small.style.border = "none";
    medium.style.border = "1px solid red";
    large.style.border = "none";
    xlarge.style.border = "none";
  });
  large.addEventListener('click', () => {
  	ctx.lineWidth = 6;
  	small.style.border = "none";
    medium.style.border = "none";
    large.style.border = "1px solid red";
    xlarge.style.border = "none";
  });
  xlarge.addEventListener('click', () => {
  	ctx.lineWidth = 10;
  	small.style.border = "none";
    medium.style.border = "none";
    large.style.border = "none";
    xlarge.style.border = "1px solid red";

  });
}


function main() {
  changeBrushSize();
  //resetPaint();
  canvas.addEventListener('mousedown',pressMouse);
  canvas.addEventListener('mouseup',releaseMouse);
  canvas.addEventListener('mousemove', drawing);
}

main();