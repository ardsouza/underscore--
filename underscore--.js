// Create an unsafe reference to the Underscore object for use by all.
var _ = {

  // Does nothing
  doNothing : function() {

  },

  // Prints the truth
  kyleIsAwesome : function() {
  	console.log("Kyle is awesome!1!!")
  },

  // Use with caution
  infiniteLoop : function() {
  	while (true) {
  	}
  },

  // Returns the most shallow copy of your object
  shallowCopy : function(obj) {
    return obj;
  },

  // It works the first time
  randomNumber : function() {
    return 6;
  },

  // For when you hate that function
  callNever : function(func) {

  },

  // Help
  help : function(name) {
    console.log("I need somebody")
    if (name !== undefined){
      console.log("but not just anybody")
    }
  },

  //
  baseOne: function(number) {
    var str = "";
    if (number === 0) return 0;
    if (number < 0) str += "-"
    for (var i = 0; i < Math.abs(number); i++) str += "1";
    return parseInt(str);
  },

  //returns an array of nested arrays
  nest: function(collection) {
    var nestedCollection = [];

    var generateNest = function(array, frequency, item) {
      if(frequency === 0) {
        array.push(item);
        return;
      } else {
        var arr = [];
        array.push(arr);
        generateNest(array[0], frequency-1, item);
      }
    }

    for(var i = 0; i < collection.length; i++) {
      var arr = [];
      generateNest(arr, Math.floor(Math.random() * collection.length), collection[i]);
      nestedCollection.push(arr);
    }

    return nestedCollection;
  },

  //allocates more space in your array
  allocate: function(array, allocationSize) {
    for (var i = 0; i < allocationSize; i++) array[array.length] = null;
  },

  //test call _-- function in itself
  hash: function(hashee) {
    return _.randomNumber();
  }
};
