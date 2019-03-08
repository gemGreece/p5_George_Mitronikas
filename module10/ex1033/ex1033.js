
// ---------------------- EXAMPLE ----------------------------------------

// // create variable to hold microphone inpute
// let myMic;

// function setup() {

//   createCanvas(windowWidth, windowHeight);

//   // capture microphone sound
//   myMic = new p5.AudioIn();

//   // turn on microphone
//   myMic.start();
// }

// function draw() {

//   background(123, 23, 45);

//   // get the audio level
//   let myMicLevel = myMic.getLevel();

//   // create a sketch which will be changing according to audio level
//   // we multiply the level by 1000 since the values it returns are very small
//   ellipse(width / 2, height / 2, myMicLevel * 1000, myMicLevel * 1000);
// }


// ----------------- EXERCISE -------------------------------------------------------

// create variable to hold microphone inpute
let myMic;
let plusX = 0;
let plusY = 0;
let sign = 1;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // capture microphone sound
  myMic = new p5.AudioIn();

  // turn on microphone
  myMic.start();
}

function draw() {

  background(123, 23, 45);

  // get the audio level
  let myMicLevel = myMic.getLevel();

  if (myMicLevel * 100 >= 60) {
    plusY = 0;
    plusX = sign * myMicLevel * 230;
    sign *= -1;
  }
  else {
    plusX = 0;
    plusY = sign * myMicLevel * 330;
    sign *= -1;
  }

  fill(random(myMicLevel / 1 * 255), random(myMicLevel / 1 * 255), random(myMicLevel / 1 * 255));
  ellipse(width / 2 + plusX, height / 2 + plusY, 250);
}


// ----------------------------- OTHER WAY ------------------------------------------------------

// /// create variable to hold microphone inpute
// let myMic;
// // create variables for RGB
// let r, g, b;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(123, 23, 45);
//   // capture microphone sound
//   myMic = new p5.AudioIn();
//   // turn on microphone
//   myMic.start();

// }
// function draw() {

//   // get the audio level
//   let myMicLevel = myMic.getLevel();
//   // change ellipse fill according to microphone volume
//   r = myMicLevel * 2000;
//   g = myMicLevel * 1000;
//   b = myMicLevel * 800;
//   fill(r, g, b, 50);
//   // create a sketch which will be changing according to audio level
//   // if the volume is greater or equal to 100
//   if (myMicLevel * 8000 >= 100) {
//     // change its x position
//     ellipse((200 + (myMicLevel * 8000)), 200, 200);
//   }
//   else {
//     // else change its y position
//     ellipse(200, (200 + (myMicLevel * 8000)), 200);
//   }
// }