var makeFadingDancer = function(top, left, timeBetweenSteps) {
  // change function name to BlinkyDancer in specs
  
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeFadingDancer.prototype = Object.create(makeDancer.prototype);
makeFadingDancer.prototype.constructor = makeFadingDancer;

makeFadingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this); 
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node = $('<img src=assets/trump.gif>');
};