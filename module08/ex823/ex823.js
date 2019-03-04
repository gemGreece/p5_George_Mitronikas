function setup() {

	// create canvas
	createCanvas(800, 600);
	// set background color
	background('#D66761');
}

function draw() {

	noFill();
  // create the face ellipse
  ellipse(width/2,height/2,200,300);

  // for the LEFT eye
  // draw the base ellipse for the eye, the sclera/βwhite of the eyeβ
  ellipse(350,275,50,25);
  // draw the Iris for the eye
  ellipse(350,275,25);
  // draw the center of the eye
  fill('black');
  ellipse(350,275,12.5);

  // for the RIGHT eye
  // draw the base ellipse for the eye, the sclera/βwhite of the eyeβ
  noFill();
  ellipse(450,275,50,25);
  // draw the Iris for the eye
  ellipse(450,275,25);
  // draw the center of the eye
  fill('black');
  ellipse(450,275,12.5);
}