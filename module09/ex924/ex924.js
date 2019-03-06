// ------------------ EXAMPLE -------------------------------------------

// // initialize the angle
// let theta = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(50);
// }

// function draw() {
//   // move the origin to the center of the canvas
//   translate(width / 2, height / 2);
//   rotate(radians(theta));
//   // draw the rect in relation with the origin
//   // in this case the x pos will be (width/2-15) and the y position (height/2-85)
//   rect(-15, -85, 30, 100);
//   // increment the angle by one degree
//   theta += 1;
// }

// ------------------------------ EXERCISE ---------------------------------------------

let theta = 0;
let phi = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {

  push();
  translate(width / 2, height / 2);
  rotate(radians(theta));

  rect(-15, -85, 30, 100);
  theta += 0.1;
  pop();

  // -----------------------------------------------

  push();
  translate(width / 2, height / 2);
  rotate(radians(phi));

  rect(-11, -289, 22, 300);
  phi += 1.2;
  pop();
}

// --------------------- OTHER WAY -----------------------------------------------------------

// // initialize the angle
// let theta = 0;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(50);
// }
// function draw() {
//   push();
//   // move the origin to the center of the canvas
//   translate(width / 2, height / 2);
//   // move the hour hand ( move 1/12th the speed of the minute hand )
//   rotate(radians(theta / 12));
//   rect(-15, -85, 30, 100);
//   pop();
//   push();
//   // move the origin back to the center of the canvas
//   translate(width / 2, height / 2);
//   // move the minute hand
//   rotate(radians(theta));
//   rect(-10, -190, 20, 200);
//   pop();
//   // increment the angle by one degree
//   theta += 1;
// }
