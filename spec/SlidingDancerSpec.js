describe('SlidingDancer', function() {

  var slidingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new SlidingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function calls animate to move the dancer side to side', function() {
    sinon.spy(slidingDancer.$node, 'animate');
    slidingDancer.step();
    expect(slidingDancer.$node.animate.called).to.be.true;
  });
});
