function setup() {
    createCanvas(900, 500);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0, 0, 255); 
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 25, 25);
  }

  function clearCanvas(){
    clear(); 
  }