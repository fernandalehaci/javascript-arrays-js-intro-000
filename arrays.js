var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']
function destructivelyAddElementToEndOfArray(array, element){
array.unshift(element)
return array
}
function addElementToBeginningOfArray(array, element){
 array= [element,...array]
}
