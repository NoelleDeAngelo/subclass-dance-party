var lineUp = function () {
  for (var i = 0; i < window.dancers.length; i++) {
    var currentNode = window.dancers[i].$node
    $(currentNode).animate({left: '1px'}, 'fast');
  }
}