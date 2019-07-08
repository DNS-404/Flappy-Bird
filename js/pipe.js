function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.width = 10;
  this.x = width;
  this.y = 0;
  this.velocity = 2;

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.width, this.top);
    rect(this.x, height-this.bottom, this.width, this.bottom);
  }

  this.move = function() {
    this.x -= this.velocity;
  }
}
