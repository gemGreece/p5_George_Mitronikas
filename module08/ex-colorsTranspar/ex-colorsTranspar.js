// ------------------- EXAMPLE 1 -----------------------------------------

// function setup() {
//     // create canvas
//     createCanvas(800, 500);
//     // set background color
//     background('#B2B2B2');
// }
// function draw() {

//     //this ellipse will have a low transparency value
//     fill(175, 68, 39, 50);
//     ellipse(width / 2, height / 2, 100);

//     // this ellipse will have a high transparency value
//     fill(124, 156, 39, 5);
//     ellipse(450, height / 2, 100);
// }


// ------------------ EXERCISE ------------------------------------------

// create a variable tp control the direction of the ellipse
let control = false;
// make ellipse starting from the left end of the canvas
let i = 30;

function setup() {
    // create canvas
    createCanvas(800, 500);
    // set background color
    background('#31bc33');
}

function draw() {
    // when ellipse is in the left edge, control would be/become false
    if (i == 30) {
        control = false;
    }
    // if ellipse is inside the canvas width (we substract 30 which is the radius
    // of our ellipse) and control is false
    if (i < (width - 30) && control == false) {
        // state fill and alpha of the ellipse
        fill(146, 87, 67, 40);
        //state stroke color and transparency
        stroke(234, 65, 88, 5);
        i++;
        // increase its x position (ellipse moves in the right direction)
        ellipse(i, height / 2, 60);
    }
    else {
        // else control will change to true
        control = true;
        //change the color and fill of the ellipse
        // state fill and alpha of the ellipse
        fill(56, 57, 67, 100);
        //state stroke color and transparency
        stroke(5, 165, 188, 50);
        // decrease its x position (ellipse moves in the left direction)
        i--;
        ellipse(i, height / 2, 60);
    }
}