var x = 0
var y = 400

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  strokeWeight(2)
  
  x = x + 1
  y = y - 1
  
  if (x > 400) {
    x = 0 ;
  } 
  if (y < 0) {
    y = 400;
  }

  line(200, 200, 200, x);
  line(200, 200, y, y);
  line(200, 200, x,y);
}
