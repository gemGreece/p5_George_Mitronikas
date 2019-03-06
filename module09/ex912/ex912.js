// ------------------ EXAMPLE -------------------------------------------

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     // set background color in the setup so sketches will leave traces
//     background('#D66761');
// }
// function draw() {
//     noStroke();
//     fill(241, 222, 152, 30);
//     // ellipse will change according to the mouseX and mouseY position
//     ellipse(mouseX, mouseY, 30, 30);
// }


// --------------------- EXERCISE ---------------------------------------

function setup() {

    createCanvas(windowWidth, windowHeight);
    // set background color in the setup so sketches will leave traces
    background('#D66761');
  }
  function draw() {

    fill(255, mouseX/4, mouseY/4);
    // ellipse will change according to the mouseX and mouseY position
    ellipse(windowWidth/2, windowHeight/2, 260);
  }

  // ---------------- OTHER WAY -----------------------------------------

//   function setup() {
//     createCanvas(800, 500);
//     // set background color 
//     background('#D66761');
//   }
//   function draw() {
//     // we use mouseX in order to control the green value of the color
//     // we divide it by 4 so that the value will not exceed 256
//     // for the blue value we use mouseY divided by 2
//     fill(241, mouseX/4, mouseY/2);
//     // ellipse will change color according to mouseX and mouseY position
//     ellipse(400, 250, 200);
//   }