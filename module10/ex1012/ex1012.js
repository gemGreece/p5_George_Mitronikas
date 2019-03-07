// ---------------------- EXAMPLE ----------------------------------------

// // define two variables for the images
// let choco1, choco2;            //-------------------------- DEFINE CHOCO_1 AND CHOCO_2

// // use preload to load the image before setup
// function preload() {                                      //-------- LOAD CHOCO_1
//   choco1 = loadImage('../module18Assets/images/choco.jpg');
// }
// function setup() {
//   // create canvas with the same size as the images
//   createCanvas(110,110);
//   // create a new image

//   choco2 = createImage(110, 110);             //--------------------------------- SETUP CHOCO_2
//   // load the pixel array of the image in order to be able to manipulate them
//   choco2.loadPixels();

//   // go through each row of the choco1 image
//   for (let y = 0; y < height; y++) {         //--------------------- GET PIXELS FROM CHOCO_1 AND SET TO CHOCO_2 UPSIDE DOWN
//     // go through each column of the choco1 image
//     for (let x = 0; x < width; x++) {
//       // use get() to take each pixel
//       let myPixel = choco1.get(x, y);
//       // set it to the opposite corner (turn image upside down)
//       choco2.set(width - x, height - y, myPixel);
//     }
//   }

//   // update the pixel array of the choco2 image
//   choco2.updatePixels();      //------------------------------ UPDATE CHOCO_2
  
//   // display the new image
//   image(choco2, 0, 0);      //---------------------------- DISPLAY CHOCO_2 IMAGE TO THE SCREEN
// }






// ---------------------- EXERCISE -------------------------------------------------------------------------------------------

// define two variables for the images
let choco1, choco2;            //-------------------------- DEFINE CHOCO_1 AND CHOCO_2

// use preload to load the image before setup
function preload() {                                      //-------- LOAD CHOCO_1
  choco1 = loadImage('../module18Assets/images/choco.jpg');
}
function setup() {
  // create canvas with the same size as the images
  createCanvas(110,110);
  // create a new image

  choco2 = createImage(110, 110);             //--------------------------------- SETUP CHOCO_2
  // load the pixel array of the image in order to be able to manipulate them
  choco2.loadPixels();

  // go through each row of the choco1 image
  for (let y = 0; y < height; y++) {         //--------------------- GET PIXELS FROM CHOCO_1 AND SET TO CHOCO_2 UPSIDE DOWN
    // go through each column of the choco1 image
    for (let x = width / 2; x < width; x++) {
      // use get() to take each pixel
      let myPixel = choco1.get(x, y);
      // set it to the opposite corner (turn image upside down)
      choco2.set(x, y, myPixel);
    }
  }

  // update the pixel array of the choco2 image
  choco2.updatePixels();      //------------------------------ UPDATE CHOCO_2
  
  // display the new image
  image(choco2, 0, 0);      //---------------------------- DISPLAY CHOCO_2 IMAGE TO THE SCREEN
}