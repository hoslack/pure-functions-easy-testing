// leave me alone :) :) :) <3 <3 <3
var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};
// leave me alone :) :) :) <3 <3 <3

// Refactor the following functions into pure functions:

function addOne(constantNumber) {
  return constantNumber +=1;
}


function timesTwo(constantNumber) {
  return constantNumber * 2;
}


function incrementArray (array) {
  return array.map(function(val) {
    return val +1;
  });

}



var addNumberArray = function (array, number) {
  var newArray = array.slice();
  newArray.push(number)
  return newArray;
};


var incrementObject = function (object) {
  var newObj = Object.assign({},object);
  Object.keys(newObj).forEach(function(x) {
  newObj[x] = newObj[x]+1;
  });
  return newObj;
};

module.exports = {
  addOne,
  timesTwo,
  incrementArray,
  addNumberArray,
  incrementObject,
  constantNumber,
  constantArray,
  constantObject
}
