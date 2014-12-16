var ObamaDancer = function(top, left, timeBetweenSteps) {
  this.$node = $("<div class='obama'><img src='src/obama.gif'></div>");
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node.css({top: top, left: left});
};

ObamaDancer.prototype = Object.create(Dancer.prototype);
ObamaDancer.prototype.constructor = ObamaDancer;
ObamaDancer.prototype.lineup = function(){
  //console.log(this);
  this.$node.css({left: 200 });
};
