var SlidingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.counter = 0;
};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  console.log(this.counter);

  if (this.counter % 2 === 0) {
    this.$node.animate({left: '+=10px'}, 'fast');
    this.counter++;
  } else {
    this.$node.animate({left: '-=10px'}, 'fast');
    this.counter++;
  }
};