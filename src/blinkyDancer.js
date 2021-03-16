var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.mouseover(function(event) {
    var styleSettings = {
      height: '400px',
      width: '400px'
    }
    $(event.delegateTarget).css(styleSettings);
  })

  this.$node.mouseout(function(event) {
    var styleSettings = {
      height: '50px',
      width: '50px'
    }
    $(event.delegateTarget).css(styleSettings);
  })
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};