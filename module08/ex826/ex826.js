function setup() {
    // create canvas
    createCanvas(800, 500);
}
function draw() {
 
    // set background color  
    background('orange');

    // ------- NESTED RECTANGULARS -----------------------
    // for (dim = 400; dim > 10; dim = dim - 10) {
    //     rectMode(CENTER);
    //     rect(width / 2, height / 2, dim, dim);
    // }
    // ---------------------------------------------------



    // ------- CUBE --------------------------------------

    noFill();
    
    // create the cube
    rect(300,200,100,100);
    rect(350,250,100,100);

    line (400,200,450,250);
    line (300,200,350,250);
    line (400,300,450,350);
    line (300,300,350,350);

}