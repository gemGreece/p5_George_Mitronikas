
let camVideo;
let newIm;
let state = true;

function setup() {

  createCanvas(700,700);
  background(224,30,44,160);

  camVideo = createCapture('VIDEO');
  button = createButton("take pics");

  button.mousePressed(takePic);  
}

function draw() {

  if (state) {
    image(camVideo, 25, 40);
  }
  else {
    image(newIm, 25, 40);
  }
  
}

function takePic() {

  camVideo.loadPixels();

  newIm = createImage();
  newIm.updatePixels();

  state = false;
}