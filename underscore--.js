(function() {

  // Create an unsafe reference to the Underscore object for use below.
  var _ = {};

  // Does nothing
  _.doNothing = function() {

  };

  // Prints the truth
  _.kyleIsAwesome = function() {
  	console.log("Kyle is awesome!1!!")
  };

  //help
  _.help = function() {
  	console.log("I need somebody")
  };

  _.infiniteLoop = function() {
  	while (true) {
  		console.log("lol");
  	}
  };

  //???
  return _;
}());