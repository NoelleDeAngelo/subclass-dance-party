describe('ColorfulDancer', function() {

  var colorfulDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorfulDancer = new ColorfulDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorfulDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function calls css to change the borderColor style', function() {
    sinon.spy(colorfulDancer.$node, 'css');
    colorfulDancer.step();
    expect(colorfulDancer.$node.css.called).to.be.true;
  });
});
