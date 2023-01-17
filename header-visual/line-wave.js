function setup() {
    var height = document.getElementById('header').offsetHeight;
    var canvas = createCanvas(windowWidth, height);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}


let a = 0;
let angleInc = 0.1;

function draw() {
  background(254, 246, 233);

  let startX = 0;
  let startY = 0;

  let shapeWidth = height;
  let shapeHeight = width;

  let x = 10 * sin(a);
  let j = 1;
  
  for (j = 0; j <= shapeWidth; j += 20) {
    for (let i = 0; i <= shapeHeight; i++) {
      
      let offset = 10
      
      x = 10 * sin(a + i);
      x2 = 10 * sin(a + i + angleInc * a)
      
      strokeWeight(1);
      stroke(x*100-100);
      point(startX + offset*i , height/2 + x);
      

      line(startX + offset*i , j + startY + x, 
           startX + offset*(i+1) , j +  startY + x2);
  
    }
    
  }
    
  a += angleInc;
  
}


function windowResized() {
    var height = document.getElementById('header').offsetHeight;
    resizeCanvas(windowWidth, height);
}
