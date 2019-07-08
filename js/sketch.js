let bird;
let pipe;

function setup() {
  createCanvas(500, 600);
  bird = new Bird();
  pipe = new Pipe();
}

function draw() {
  background(0);
  bird.update();
  bird.show();

  pipe.move();
  pipe.show();
}

function keyPressed() {
  if(key == ' '){
    bird.fly();
  }
}
