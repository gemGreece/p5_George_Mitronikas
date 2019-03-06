// ------------------ EXAMPLE -------------------------------------------

// //create variable for ellipse size
// let size;

// function setup() {
//   createCanvas(800, 600);
//   background(75);
// }

// function draw() {
//   // the size of the ellipses will be between (20,200]
//   let size = random(20, 200);
//   // all of x ,y and size of the ellipse will be random
//   // the x position will be between (size,(width-size)] so that the ellipse will always be within canvas
//   // the y position of the ellipse will also be always inside the canvas
//   ellipse(random(size, (width-size)), random(size, (height-size)), size);
// }


// ------------------- EXERCISE -------------------------------------------

let size;

function setup() {
  createCanvas(800, 600);
}

function draw() {

  size = random(20, 200);

  background(23, 92, 138);
  fill(random(0, 256), random(0, 256), random(0, 256));
  ellipse(random(size, (width - size)), random(size, (height - size)), size);

}


// ------------------------ (OTHER WAY) ---------------------------------------

// //create variable for ellipse size
// let size;

// function setup() {
//   createCanvas(800, 600);
// }

// function draw() {
//   background(67, 34, 89);
//   // the size of the ellipses will be between (20,200]
//   let size = random(20, 200);
//   // create random fill for the ellipses
//   fill(random(1, 256), random(1, 256), random(1, 256));
//   // all of x ,y and size of the ellipse will be random
//   // the x position will be between (size,(width-size)] so that the ellipse will always be within canvas
//   // the y position of the ellipse will also be always inside the canvas
//   ellipse(random(size, (width - size)), random(size, (height - size)), size);
// }