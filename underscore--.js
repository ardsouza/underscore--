// Create an unsafe reference to the Underscore object for use by all.
var _ = {

  // Does nothing
  doNothing : function() {

  };

  // Prints the truth
  kyleIsAwesome : function() {
  	console.log("Kyle is awesome!1!!")
  };

  // Use with caution
  infiniteLoop : function() {
  	while (true) {
  	}
  };

  // Returns the most shallow copy of your object
  shallowCopy : function(obj) {
    return obj;
  }

  // It works the first time
  randomNumber : function() {
    return 6;
  }

  // For when you hate that function
  callNever : function(func) {

  }

  

  // Help
  help : function(name) {
    console.log("I need somebody")
    if (name !== undefined){
      console.log("but not just anybody")
    }
  };
};
