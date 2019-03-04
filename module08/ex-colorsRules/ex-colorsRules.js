// ------------------- EXAMPLE 1 -----------------------------------------

// function setup() {
//     // create canvas
//     createCanvas(800, 500);
//     // set background color
//     background('orange');
// }
// function draw() {

//     fill('red');
//     stroke('#f12e78');
//     strokeWeight(5);
//     ellipse(width / 2, height / 2, 50);

//     fill('#DC143C');
//     stroke('#00A500');
//     strokeWeight(8);
//     ellipse(500, height / 2, 50);
// }


// ------------------- EXAMPLE 2 ----------------------------------------

// function setup() {
//     // create canvas
//     createCanvas(800, 500);
//     // set background color
//     background('orange');
// }
// function draw() {

//     fill('red');
//     stroke('#49ae7c');
//     strokeWeight(5);

//     ellipse(width / 2, height / 2, 50);
//     ellipse(width / 2, height / 3, 50);
//     rect(width / 2, height / 6, 50, 50);
//     ellipse(width / 4, height / 2, 50);
// }


// -------------- EXAMPLE 3 --------------------------------

// function setup() {
//     // create canvas
//     createCanvas(800, 500);
//     // set background color
//     background('orange');
// }
// function draw() {

//     push();
//     fill('red');
//     stroke('#f1fedf');
//     ellipse(width / 2, height / 2, 50);
//     pop();

//     ellipse(width / 2, height / 3, 50);
//     rect(width / 2, height / 6, 50, 50);
//     ellipse(width / 4, height / 2, 50);
// }


// --------------------------- EXERCISE (MY WAY) ------------------------------------------

// function setup() {

//     // create canvas
//     createCanvas(800, 600);
//     // set background color
//     background('#D66761');
// }

// function draw() {

//     push();
//     noStroke();
//     fill("#dddd00");
//     // create the face ellipse
//     ellipse(width / 2, height / 2, 200, 300);
//     pop();

//     push();
//     noFill();
//     stroke("brown");
//     strokeWeight(2);
//     // for the LEFT eye
//     // draw the base ellipse for the eye, the sclera/βwhite of the eyeβ
//     ellipse(350, 275, 50, 25);
//     ellipse(450, 275, 50, 25);
//     // draw the Iris for the eye
//     pop();

//     push();
//     noFill();
//     strokeWeight(2);
//     ellipse(350, 275, 25);
//     ellipse(450, 275, 25);
//     // draw the center of the eye
//     pop();


//     fill('green');
//     ellipse(350, 275, 12.5);
//     ellipse(450, 275, 12.5);

// }


// --------------------------- EXERCISE ------------------------------------------------

function setup() {
    createCanvas(800, 600);
    // set background color
    background('#D66761');
}
function draw() {

    // state the fill color of the shape
    fill('#FBEFCC');
    // state the border color of the shape
    stroke('#FBEFCC');
    // state the border weight of the shape
    strokeWeight(2);
    // create the face ellipse
    ellipse(width / 2, height / 2, 200, 300)

    // ------------------------------------------------------------

    // state the border color of the outer eye circle
    stroke('#A2836E');
    // for the left eye
    // draw the base ellipse, the sclera/“white of the eye”
    ellipse(350, 275, 50, 25);

    // state the border of the iris
    stroke('black');
    // draw the Iris for the eye
    ellipse(350, 275, 25);

    // fill the center of the eye
    fill('#034F84');
    // color the border
    stroke('#034F84');
    // draw the center of the eye
    ellipse(350, 275, 12.5);

    // -----------------------------------------------------------------------------------

    // state the border color of the outer eye circle
    stroke('#A2836E');
    // for the right eye
    // draw the base ellipse for the eye, the sclera/“white of the eye”
    noFill();
    ellipse(450, 275, 50, 25);

    // state the border of the iris
    stroke('black');
    // draw the Iris for the eye
    ellipse(450, 275, 25);

    // fill the center of the eye
    fill('#034F84');
    // color the border
    stroke('#034F84');
    // draw the center of the eye
    ellipse(450, 275, 12.5);
}