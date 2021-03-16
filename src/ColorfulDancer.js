var ColorfulDancer = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.counter = 0;
};

ColorfulDancer.prototype = Object.create(BlinkyDancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function () {
  BlinkyDancer.prototype.step.call(this);

  if (this.counter % 4 === 0) {
    var styleSettings = {
      borderColor: 'blue'
    };
  } else if (this.counter % 5 === 0) {
    var styleSettings = {
      borderColor: 'green'
    };
  } else if (this.counter % 3 === 0) {
    var styleSettings = {
      borderColor: 'red'
    };
  } else {
    var styleSettings = {
      borderColor: 'yellow'
    };
  }
  this.$node.css(styleSettings);
  this.counter++;
};
