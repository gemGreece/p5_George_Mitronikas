// ------------------ EXAMPLE -------------------------------------------

// // create a variable to control the direction of the ellipse
// let control = false;
// // make ellipse starting from the left end of the canvas
// let i=30;
// function setup() {
//   // create canvas
//   createCanvas(800,500);
//   // set background color
//   background('#31bc33');
// }
// function draw () {
//   // when ellipse is in the left edge, control would be/become false
//   if (i==30) {
//     control = false;
//   }
//   // if ellipse is inside the canvas width (we substract 30 which is the radius
//   // of our ellipse) and control is false
//   if (i<(width-30) && control==false){
//     i++;
//     // increase its x position (ellipse moves in the right direction)
//     ellipse(i,height/2,60);
//   }
//   else {
//     // else control will change to true
//     control = true;
//     // decrease its x position (ellipse moves in the left direction)
//     i--;
//     ellipse(i,height/2,60);
//   }
// }
// // make the ellipse stop when the user clicks the mouse
// function mousePressed() {
//   noLoop();
// }
// // make the ellipse continue moving when user releases the mouse
// function mouseReleased() {
//   loop();
// }



// --------------------------- EXERCISE -----------------------------------------------

// initial x and y positions of the circular movement
let x0= 100;
let y0= 100;
// this variable is used to make the ellipse moving
let t = 0;
function setup() {
  // make a canvas that's 800x600 pixels
  createCanvas(800, 500);
}
function draw() {
  // set background color
  background('#D66761');
  // write the appropiate equations for x and y to make the ellipse moving circular
  let xMove = (width/2) + x0*sin(2*PI*t);
  let yMove = (height / 2) + y0*cos(2*PI*t);
  // create the ellipse
  ellipse(xMove, yMove, 20, 20);
  // increase the value of t and thus make the ellipse moving
  t += 0.01;
}
// make the ellipse stop moving when the user presses the mouse
function mousePressed() {
  noLoop();
}
// make the ellipse continue moving when user releases the mouse
function mouseReleased() {
  loop();
}