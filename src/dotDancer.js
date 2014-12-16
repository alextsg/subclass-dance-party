var DotDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  var random = Math.random()*100;
  this.$node.css({border: random + "px solid red", "border-radius": random + "px"});

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = Dancer.prototype.step;
  //console.log(this);
  this.colors = ['red','blue','yellow','black','orange','white','green'];

};

DotDancer.prototype = Object.create(Dancer.prototype);
DotDancer.prototype.constructor = DotDancer;

DotDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //console.log(this);
  //this.oldStep.call(this);
  var colors = ['red','blue','yellow','black','orange','white','green'];
  Dancer.prototype.step.call(this);
  //console.log(this.oldStep)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  var random = Math.floor(Math.random()*7);
  var color = colors[random];
  this.$node.css({'border-color':color});
};

DotDancer.prototype.lineup = function(){
  this.$node.css({left:0});
};

