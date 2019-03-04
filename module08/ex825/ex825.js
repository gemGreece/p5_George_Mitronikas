let xPos;
let yPos;
function setup() {
    // create canvas
    createCanvas(800, 500);
    // set background color
    background('orange');
}
function draw() {

    
// ------------------------------ DOTS GRID -----------------------------------------------------    
    
    //   for (xPos = 1; xPos<width; xPos = xPos +10) {
    //     for (yPos = 1; yPos<height; yPos = yPos+10) {
    //       point (xPos,yPos);
    //     }
    //   }

// ----------------------------- DIAGONAL LINE WITH DOTS -------------------------------------------------------


    for (xPos = 1; xPos < width; xPos = xPos + 30) {
        // in order to create a diagonal line of points going from up left to down right
        // you will have to use the appropiate geometry to define the y coordinate
        point(xPos, 5 / 8 * xPos);
    }

}