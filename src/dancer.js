var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $("<img src='assets/dancingDog.png' class='dancer' height='50px' width='50px'>");
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};