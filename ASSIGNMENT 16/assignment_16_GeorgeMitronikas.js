let diameter = 30;
// let r = 255;  // SECOND COLOR WAY (place in the positions of x and y in the fill() function the r and g variables)
// let g = 0;


function setup() {

    createCanvas(1000, 600);
    background('#b14c53');
}

function draw() {

    for (let y = 25; y < height-diameter / 2; y += 130) {

        for (let x = 25; x < width - diameter / 2; x += 70) {

            fill(x,y,0);
            ellipse(x, y, diameter);

            if (y === 285) {
                fill(30, 220, 240);
                ellipse(x, y, diameter * 0.50);
            }
            
            // r = r - 6;  // SECOND COLOR WAY
            // g = g + 4;
            
        }
    }

    // r = 255;  // SECOND COLOR WAY
    // g = 0;

}