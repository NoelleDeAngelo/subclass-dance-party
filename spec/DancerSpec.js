describe('Dancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that sets timeout', function() {
    sinon.spy(window, 'setTimeout');
    dancer.step();
    expect(window.setTimeout.called).to.be.true;
  });

  it('should set the position of the dancer', function() {
    sinon.spy(dancer, 'setPosition');
    dancer.setPosition(10, 11)
    expect(dancer.setPosition.called).to.be.true;
  });
});
