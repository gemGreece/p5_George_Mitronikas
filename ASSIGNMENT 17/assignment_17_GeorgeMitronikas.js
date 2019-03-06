
let theta = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // ----------------------------------------------- CLOCK

  background(170);
  
  push();
  fill(83, 92, 61);
  ellipse(width / 2, height / 2, 688);
  pop();

  // ----------------------------------------------- HOURS

  push();
  translate(width / 2, height / 2);
  rotate(radians(theta / 60));

  fill('red');
  rect(-15, -85, 30, 100);
  pop();

  // ----------------------------------------------- MINUTES

  push();
  translate(width / 2, height / 2);
  rotate(radians(theta / 12));

  fill('green');
  rect(-9, -211, 18, 220);
  pop();

  // ----------------------------------------------- SECONDS

  push();
  translate(width / 2, height / 2);
  rotate(radians(theta));

  fill('blue');
  rect(-6, -294, 12, 300);
  pop();

  // ----------------------------------------------- INCREMENT

  theta++;
}

