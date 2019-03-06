// ------------------ EXAMPLE -------------------------------------------

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // set background color in the setup so sketches will leave traces
//   background('white');
// }
// function draw() {
//   noStroke();
//   fill(0, 0, 0, 30);
//   // ellipse will change according to the mouseX and mouseY position
//   ellipse(mouseX, mouseY, 30, 30);
// }
// // clear the canvas every time the user presses the mouse
// function mousePressed() {
//   clear();
// }


// ---------------- EXERCISE ---------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  // set background color in the setup so sketches will leave traces
  background('white');
}
function draw() {
  noStroke();
  fill(0, 0, 0, 30);
  // ellipse will change according to the mouseX and mouseY position

  if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, 30);
  }

  if (keyIsPressed === true) {
    clear();
  }
}


// ----------------------------- OTHER WAY --------------------------------------------

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // set background color
//   background('white');
// }
// function draw() {
//   noStroke();
//   fill(0, 0, 0, 30);
//   if (mouseIsPressed) {
//     // ellipse will be drawn to the mouseX and mouseY position
//     ellipse(mouseX, mouseY, 30, 30);
//   }
// }
// // clear the canvas every time the user presses a key
// function keyPressed() {
//   clear();
// }