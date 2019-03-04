function setup() {
    // create canvas
    createCanvas(800, 500);
}
function draw() {

    // set background color
    background('orange');

    // --------------------------------------------------
    // triangle(width / 2, height / 2, 500, 400, 300, 400);
    // triangle(width / 2, height / 2, 500, 100, 300, 100);


    
    // ------------- TRIANGLES SHAPE --------------------
    
    // create the shape using triangles
    triangle(400, 250, 500, 400, 300, 400);
    triangle(300, 100, 400, 250, 200, 250);
    triangle(500, 100, 600, 250, 400, 250);
    triangle(400, 250, 200, 250, 300, 400);
}