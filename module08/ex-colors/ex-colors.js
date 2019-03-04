function setup() {
    // create canvas
    createCanvas(800, 500);
}
function draw() {
    // set background color
    background('#B1CBBB');
    //use the fill function to color the triangle
    fill('#EEA29A');
    // use the noStroke function to remove border
    noStroke();
    triangle(width / 2, height / 2, 500, 400, 300, 400);
    // use the noFill function to remove the fill of our element
    noFill();
    // use the stroke to change the color of the border
    stroke('#D64161');
    // use the strokeWeight to change the border weight
    strokeWeight(5);
    triangle(width / 2, height / 2, 500, 100, 300, 100);
}