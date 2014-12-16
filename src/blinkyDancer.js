var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  var random = Math.random()*100;
  this.$node.css({border: random + "px solid red", "border-radius": random + "px"});

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = Dancer.prototype.step;
  //console.log(this);


};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //console.log(this);
  //this.oldStep.call(this);

  Dancer.prototype.step.call(this);
  //console.log(this.oldStep)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

BlinkyDancer.prototype.lineup = function(){
  this.$node.css({left:0});
};

