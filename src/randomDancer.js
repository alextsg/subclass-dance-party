var obamaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

randomDancer.prototype = Object.create(Dancer.prototype);
randomDancer.prototype.constructor = randomDancer;
