let i = 20;

function setup() {

    // create canvas
    createCanvas(800, 600);
    // set background color
    background('orange');
}

function draw() {

    // line((width / 2 - 100), height / 2, (width / 2 + 100), height / 2);
    // line((width / 2 - 100), height / 2, (width / 2 - 200), 150);
    // line((width / 2 + 100), height / 2, (width / 2 + 200), 350);


    // STAIRCASE ----------------------------------------------
    line(350, 100, 350, 300);
    // right line
    line(450, 100, 450, 300);
    // draw horizontal lines across the height of the two vertical lines
    for (i; i < 200; i = i + 20) {
        line(350, 100 + i, 450, 100 + i);
    }
}