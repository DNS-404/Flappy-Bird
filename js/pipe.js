function Pipe() {
  this.pos = 0;
  this.top = 0;
  this.bottom = 0;

  this.width = 10;
  this.x = width;
  this.y = 0;
  this.velocity = 2;

  this.generateNewPipe = function(x) {
    this.x = x;
    this.pos = random(height/5, height-(height/5));
    this.top = this.pos - random(60, 100);
    this.bottom = this.pos + random(60, 100);
    // print(this.top + " " + this.bottom);
  }

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.width, this.top);
    rect(this.x, this.bottom, this.width, height-this.bottom);
  }

  this.move = function() {
    this.x -= this.velocity;
  }

  this.reachedEnd = function() {
    return this.x < -this.width;
  }

  // Not at all accurate :p
  this.collision = function(bird) {
    return (bird.y < this.top || bird.y > this.bottom) &&
          (bird.x > this.x && bird.x < this.x + this.width);
  }
}
