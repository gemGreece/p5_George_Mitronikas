



// ---------------------------- LEFT-RIGHT MOTION ---------------------------------------------

// create a variable to control the direction of the ellipse
// let control = false;
// // make ellipse starting from the left end of the canvas
// let i = 30;
// function setup() {
//     // create canvas
//     createCanvas(800, 500);
// }
// function draw() {

//     // set background color
//     background('#31bc33');

//     // when ellipse is in the left edge, control would be/become false
//     if (i == 30) {
//         control = false;
//     }
//     // if ellipse is inside the canvas width (we substract 30 which is the radius
//     // of our ellipse) and control is false
//     if (i < (width - 30) && control == false) {
//         i++;
//         // increase its x position (ellipse moves in the right direction)
//         ellipse(i, height / 2, 60);
//     }
//     else {
//         // else control will change to true
//         control = true;
//         // decrease its x position (ellipse moves in the left direction)
//         i--;
//         ellipse(i, height / 2, 60);
//     }
// }

/* ------------------------- THEORY -------------------------------------------------------

You may have noticed that your ellipse is leaving traces as it is moving through the canvas.
Why do you think this happens ? What would you do if you wanted to change it ?

Answer :
The reason why this is happening is because we have defined our background in the setup() and not in the draw().
Since the setup() is called only once, the background is created only one time.
On the other hand, the draw() runs 60 times the second, and thus new cycles are created each time.
If we define the background in draw(), then it will be created each time the draw() runs and thus the cycle traces will not be visible.

// ------------------------------------------------------------------------------------- */




// -------------------- TWO-DIMENSIONAL MOTION WITH COLLISIONS -------------------------

let x = 300; // initial value to add to
let y = 200; // initial value to add to

let speedx = 4; // value to be added to 'x' variable in every iteration of the draw() function 
let speedy = -3; // value to be added to 'y' variable in every iteration of the draw() function 

let r = 24; // diameter / width of the ball

function setup() {
    createCanvas(600, 400);
}

function draw() {
    
    background(0); // background color

    strokeWeight(4); // Color-shaping of the ball, all these methods are applied to the ellipse when it is constructed
    stroke(255);
    fill(255, 0, 0);

    //----------------------------------------------------

    x = x + speedx; // new positions (x & y) for every iteration of the draw() function
    y = y + speedy;

    // ---------------------------------------------------

    if (x > (width - r / 2) || x - r / 2 < 0) {  // if Conditional to check and direct the direction/flow of the ball's motion,
        speedx = speedx * (-1);                  // left of OR is the check if it reached the 'right wall' and right of OR is the check if it reached the "left wall"
    }
    if (y > (height - r / 2) || y - r / 2 < 0) {  // if Conditional to check and direct the direction/flow of the ball's motion,
        speedy = speedy * (-1);                   // left of OR is the check if it reached the 'floor' and right of OR is the check if it reached the "ceiling"
    }

    // Also, all the time one of the two if Conditional may be validated and implemented. They cannot be simultaneously. The reason is 
    // because the ball cannot hit at the same time two 'walls', only one. So, always the direction changes on only one axis, OR x only, OR y only.

    ellipse(x, y, r); // Drawing of the ellipse in every iteration of the draw() function
}