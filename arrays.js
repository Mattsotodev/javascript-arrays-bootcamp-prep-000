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
function accessElementInArray(array,index){
 return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
function removeElementFromBeginningOfArray(array){
  array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}







