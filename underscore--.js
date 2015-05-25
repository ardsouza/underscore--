// Create an unsafe reference to the Underscore object for use by all.

var _ = {

  // Does nothing
  doNothing : function() {

  },

  //encrypt a string?
  encryptString: function(str){
    return str.split('').reverse().join('');
  },

  //decrypt a string?
  decryptString: function(str){
    return str.split('').map(function(s,i){return s[i%2]}).reverse().join('');
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


  //Brian McKnight Inspired Recursive Decision Tree
  backAtOne: function(start, end) {
    var imForReal = [
    "You're like a dream come true", 
    "Just wanna be with you", 
    "Girl, it's plain to see that you're the only one for me",
    "Repeat steps one through three", 
    "Make you fall in love with me", 
    "I'll start back at 1."
    ];
    var number = start || 1;
    var ending = end || imForReal.length;
    for (var i = number; i<ending; i++) {
      console.log(i);
      console.log(imForReal[i-1]);
      if (i === 4) {
        _.backAtOne(1, 3);
      }
    }
    if(ending < imForReal.length) {
      return;
    }
    console.log("My work is done");
    console.log(imForReal[i-1]);
    _.backAtOne(1);
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
  },

  // inserts a debugger deep into the call stack
  insertDebugger: function() {
    return function () {
      return function () {
        return function () {
          debugger;
        }
      }
    }
  },

  //will tell you if it's your birthday. Enter birthday in string format "Month Data" e.g. "May 22"
  isItMyBirthday: function(birthday) {
    var birthday = new Date(birthday);
    var today = new Date();

    var responses = ["sure", "maybe", "ok", "probably"]; 

    if(birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate()) {
      var index = Math.floor(Math.random()*responses.length);
      return responses[index];
    } else {
      return "no.";
    }
  },

  // Makes every value in a collection identical to the first
  allSameifier: function(collection) {
    var i = 1,
        length = collection.length === +collection.length ? collection.length : Object.keys(collection).length;

    if (collection.length === +collection.length) {
        for (; i < length; i++) {
            collection[i] = collection[0];
        }
    } else {
        var keys = Object.keys(collection);
        for (; i < length; i++) {
            collection[keys[i]] = collection[keys[0]];
        }
    }
  return collection;
  },

  //sorts in a very questionable manner
  questionableSort : function(collection, comparator) {
    if (!comparator) comparator = function(a,b) { return a < b; }
    for (var key = 0; key < collection.length; key++) {
      collection[key] = !!collection[key];
    }
    for (var i = 0; i < collection.length; i++) {
      for (var j = i; j < collection.length; j++) {
          if(comparator(collection[i],collection[j])) {
            collection.slice(j,0,collection.slice(i,1));
          } else {
            collection.slice(i-1,0,collection.slice(j,1));
          }
      }
    }
    return collection;
  }
};

  