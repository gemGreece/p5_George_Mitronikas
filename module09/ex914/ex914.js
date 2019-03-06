// ------------------ EXAMPLE -------------------------------------------

// function setup() {
//   createCanvas(800, 500);
// }
// function draw() {
//   // set background inside draw so that the ellipse will not leave traces
//   background('#D66761');
//   fill(241, 213, 145);
//   // if the mouse is pressed
//   if (mouseIsPressed){
//     // an ellipse will be drawn in the position where the mouse is pointing
//     ellipse(mouseX, mouseY, 50);
//   }
// }


// ------------------ EXERCISE -------------------------------------------

let color = 'white';

function setup() {
  createCanvas(800, 500);
  background('#D66761');
}
function draw() {
  // set background inside draw so that the ellipse will not leave traces
  if (mouseIsPressed){
    fill(color);
    ellipse(mouseX, mouseY, 30);
  }

  fill('red');
  ellipse(620, 300, 60);

  fill('green');
  ellipse(620, 420, 60);

  fill('white');

}

function mouseClicked() {
  if (mouseX > 590 && mouseX < 650 && mouseY > 270 && mouseY < 330 ) {
    color = 'red';
  }
  else if (mouseX > 590 && mouseX < 650 && mouseY > 390 && mouseY < 450 ) {
    color = 'green';
  }
}


// ------------------------ OTHER WAY ------------------------------------

// let mycolor = 'white';
// function setup() {
//   createCanvas(800, 500);
//   background('#D66761');
// }
// function draw() {
//   // this color will change every time the mouse clikcs the red or green ellipse
//   fill(mycolor);
//   // if the mouse is pressed
//   if (mouseIsPressed){
//     // an ellipse will be drawn in the position where the mouse is pointing
//     ellipse(mouseX, mouseY, 20);
//   }
//   fill ('red');
//   ellipse (600,250,50);
//   fill('green');
//   ellipse (600,350,50);
// }
// // everytime the mouse is clicked
// function mouseClicked(){
//   // if the mouse x and y position is inside the red ellipse
//   if (mouseX >=550 && mouseX <=650 && mouseY >=200 && mouseY <=300){
//     //change its color to red
//     mycolor = 'red';
//   }
//   // if the mouse x and y position is inside the green ellipse
//   if (mouseX >=550 && mouseX <=650 && mouseY >=300 && mouseY <=400){
//     //change its color to green
//     mycolor = 'green';
//   }
// }
