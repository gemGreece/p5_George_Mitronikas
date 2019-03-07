
// ---------------------- EXAMPLE ----------------------------------------

// // create a variable for the image
// let chocos;

// // preload image
// function preload() {
//   chocos = loadImage("../module18Assets/images/chocos.jpg");
// }

// function setup() {
//   // create canvas the same size as the image
//   createCanvas(800, 562);
// }

// function draw() {
//   // show the 'initial image
//   chocos.loadPixels();
//   // go through each row

//   for (let y = 0; y < height; y++) {
//     // and each column
//     for (let x = 0; x < width; x++) {
//       // go through all pixels of image, R, G, B, and A
//       let index = (x + y * width) * 4;
//       // play with rgb values
//       chocos.pixels[index] = mouseY; // red
//       chocos.pixels[index + 2] = mouseX; // blue
//     }
//   }
  
//   chocos.updatePixels();

//   // display manipulated image
//   image(chocos, 0, 0);
// }


// ------------------- EXERCISE -----------------------------------------------

// create a variable for the image
let chocos;

// preload image
function preload() {
  chocos = loadImage("../module18Assets/images/chocos.jpg");
}

function setup() {
  // create canvas the same size as the image
  createCanvas(800, 562);
}

function draw() {
  // show the 'initial image
  chocos.loadPixels();
  // go through each row

  for (let y = 0; y < height; y++) {
    // and each column
    for (let x = 0; x < width; x++) {
      // go through all pixels of image, R, G, B, and A
      let index = (x + y * width) * 4;
      // play with rgb values
      chocos.pixels[index + 0] = random(255);
      // chocos.pixels[index + 1] = random(255);
      chocos.pixels[index + 2] = random(0, 155);
      // chocos.pixels[index + 3] = random(255);
    }
  }
  
  chocos.updatePixels();

  // display manipulated image
  image(chocos, 0, 0);
}
