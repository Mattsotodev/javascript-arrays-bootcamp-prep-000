var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var candy = "foo"

function addElementToBeginningOfArray(chocolateBars, candy){
 return [candy, ...chocolateBars];
}
function destructivelyAddElementToBeginningofArray(chocolateBars, candy){
  chocolateBars.unshift(candy);
  return chocolatebars;
}
function addElementToEndOfArray(chocolateBars, candy){
  return [ ...chocolateBars, candy];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candy){
  chocolateBars.push(candy);
  return chocolateBars;
}
function accessElementInArray(array, index){
 return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift();
}
function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  array.pop();
}
function removeElementFromEndOfArray(chocolateBarsy){
  return array.slice(0,array.length - 1)
}







