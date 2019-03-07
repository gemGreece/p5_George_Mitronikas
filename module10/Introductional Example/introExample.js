// ------------------ 1ST WAY -------------------------------------------

// function setup() {
 
//   createCanvas(1000, 700)
//   loadImage('../module18Assets/images/chocos.jpg', function(myImg) {
//     image(myImg, 0, 0);
//   });
// }


// --------------------- SECOND WAY -------------------------------------

let myImg;

function preload() {
  myImg = loadImage("../module18Assets/images/chocos.jpg", crossorigin="anonymous");
}

function setup() {
  createCanvas(1000, 700);
  image(myImg, 30, 30);
}