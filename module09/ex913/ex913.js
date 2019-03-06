// ------------------ EXAMPLE -------------------------------------------

// let xPos, yPos;
// function setup() {
//   createCanvas(800, 500);
//   // set background color
//   background('#D66761');
// }
// function draw() {
//   fill(241, 213, 145);
//   // an ellipse will be drawn everytime the xPos, yPos are defined
//   ellipse(xPos, yPos, 50);
// }
// // everytime the mouse is clicked
// function mouseClicked(){
//   // the x position will take the value of the horizontal mouse position
//   xPos=mouseX;
//   // the y position will take the value of the vertical mouse position
//   yPos = mouseY;
// }

// ------------------ EXERCISE -------------------------------------------

let green = 255; 
let blue = 255;

function setup() {
  createCanvas(800, 500);
  // set background color
  background('#D66761');
}
function draw() {
  fill(255, green, blue);
  // an ellipse will be drawn everytime the xPos, yPos are defined
  ellipse(400, 250, 150);
}
// everytime the mouse is clicked
function mouseClicked(){
  
  if (mouseX > 800/2 - 75 && mouseX < 800/2 + 75 && mouseY > 500/2 - 75 && mouseY < 500/2 + 75 ) {
    green = 0;
    blue = 0;
  }
  else {
    green = 255;
    blue = 255;
  }
}


// -------------------------- OTHER WAY ----------------------------------------------------

// let i = 'white';
// function setup() {
//   createCanvas(800, 500);
//   // set background color
//   background('#D66761');
// }
// function draw() {
//   fill(i);
//   // create an ellipse
//   ellipse(400, 250, 50);
// }
// // everytime the mouse is clicked
// function mouseClicked(){
//   // if the mouse x and y position is inside the ellipse
//   if (mouseX >=350 && mouseX <=450 && mouseY >=200 && mouseY <=300){
//     //change its color to red
//     i = 'red';
//   }
//   // else change the color to white
//   else {
//     i = 'white';
//   }
// }