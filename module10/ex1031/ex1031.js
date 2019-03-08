
// ---------------------- EXAMPLE ----------------------------------------

// function preload() {
  
//   Sound = loadSound('../module18Assets/sounds/Sg.mp3');
// }

// function setup() {
  
//   // define the sound level
//   Sound.setVolume(0.1);

//   // play the sound
//   Sound.play();
// }


// ----------------- EXERCISE ---------------------------------------------

function preload() {
  
  Sound = loadSound('../module18Assets/sounds/Sg.mp3');
}

function setup() {
  
  // define the sound level
  Sound.setVolume(0.1);

  // play the sound
  Sound.play();
}

function mousePressed() {
  Sound.setVolume(0.5);
}

function mouseReleased() {
  Sound.setVolume(0.1);
}

