// ---------------------- EXAMPLE ----------------------------------------

// let camVideo;

// function setup(){
//   createCanvas(600,800);

//   // make the connection to the webcam
//   camVideo = createCapture('VIDEO');
  
//   //set background color
//   background(244,98,44);
// }

// function draw() {
  
// }

// ------------------- EXERCISE ------------------------------------------

let camVideo;

function setup(){
  createCanvas(1000,800);

  // make the connection to the webcam
  camVideo = createCapture('VIDEO');
  camVideo.hide();
  //set background color
  background(244,98,44);
}

function draw() {
  image(camVideo, 20, 20);
}

