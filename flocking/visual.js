const flock = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  let boid_count = 300;
  


  for (let i = 0; i < boid_count; i++) {
    flock.push(new Boid());
  }
  
  
}

function draw() {
  background(170, 170, 170);

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

  
