var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // change function name to BlinkyDancer in specs
  
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this); 
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node = $('<img src=assets/obama.gif>');
};


