var x = 50;
var y = 350;

function setup() {
  createCanvas(400, 400);
 }

function draw() {
  background(255);
  rectMode(CENTER)
  fill(255)
 
  x = x + 1;
  y = y - 1;

  if (x > 350) {
    x = 50;
  } 
  else {
    x = x + 1;
  }
  if (y < 50) {
    y = 350;
  } 
  else {
    y = y - 1;
  }
  fill(204)
  circle(x, x, 100);
  circle(y, y, 100);
  circle(x, y, 100);
  circle(y, x, 100);
}
  
