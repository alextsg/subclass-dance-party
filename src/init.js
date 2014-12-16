$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineupButton").on("click", function(){
    for (var i=0; i < window.dancers.length; i++){
      window.dancers[i].lineup();
    }
  });

  $("body").on("click", ".obama", function() {
    var top = parseInt($(this).css("top"));
    //console.log(top);
    var left = parseInt($(this).css("left"));
    var closest = window.dancers[1];
    var distanceCounter;
    for(var i=0; i<window.dancers.length; i++) {
      //var topNeighbour = parseInt($(window.dancers[i]).css("top"),10);
      //var leftNeighbour = parseInt($(window.dancers[i]).css("left"),10);
      var topNeighbour = Math.floor(window.dancers[i].top);
      var leftNeighbour = Math.floor(window.dancers[i].left);
      //console.log(topNeighbour);
      var topDiff = top - topNeighbour;
      var leftDiff = left - leftNeighbour;
      //console.log(topDiff);
      //console.log(leftDiff);
      if(topDiff !== 0 && leftDiff !== 0) {
        var dist = Math.sqrt((topDiff * topDiff)+(leftDiff * leftDiff));
        //console.log(dist);
        if (!distanceCounter){
          distanceCounter = dist;
        }
        if(dist < distanceCounter) {
          distanceCounter = dist;
          //window.dancers[i].distance = dist;
          closest = window.dancers[i];
        }
      }
    }
    //$(this).css({border: "5px solid blue"});
    var topThis = $(this).css("top");
    var leftThis = $(this).css("left");

    var topClosest = (parseInt(topThis) + 60) + "px";
    var leftClosest = (parseInt(leftThis) + 30) + "px";
    closest.$node.animate({top: topClosest, left: leftClosest});
  });

  $("body").on("mouseover", ".dancer", function(){
    console.log('hello');
    if(!this.check)
    {
      $(this).animate({
        'height': '+=200px', 'width': '+=200px'
      });
      this.check = true;
    }
  });
});

