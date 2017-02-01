//Find the highest and lowest number
var decimal = [2.34, -56.78, -967.89, 1.2, 0.456, -0.23];
var empty = [];
var negDecimal = [-1, -7, -0.78, -978];
var siblings = ["Daniel", "Yasuko"];
var parents = ["Chuji", "Harumi", "Mary", "Javier"];
var lowerSiblings = ["daniel", "yasuko"];


function highestNum(decimal) {
  var max = -1000;
  decimal.forEach(function(element) {
    if(element > max)
        max = element;
  });
  return max;
}

function lowestNum(decimal) {
  var min = 1000;
  decimal.forEach(function(index) {
    if(index < min)
      min = index;
  });
    return min;
}

//Finds the number closest to zero
function closeZero(decarray) {
  var distance = 1e6;
  var closest;
  decarray.forEach(function(index) {
    if(Math.abs(index) < distance){
      distance = Math.abs(index);
      closest = index;
    }
  });
  return closest;
}
//Sorts the array in ascending order(smallest to highest)Revisit for closest to zero challenge.
function sortZero(decimal) {
  return console.log(decimal.sort(function(a){return Math.abs(a)}));

}


function Sum() {
  if(decimal.length === 0) {
    return decimal.length;
  } else {
    var arraySum = 0;
    decimal.forEach(function(elementValue){
      console.log("The current element value is: " + elementValue);
      //arraySum = arraySum + elementValue;
      arraySum += elementValue;
      console.log("The new sum is: " + arraySum)
    });
    return arraySum;
  }
}


//Create Mean value, also could use Sum() to generate arraySum
function mean() {
  if (decimal.length === 0){
    return decimal.length;
  } else {
    var arraySum = 0;
    decimal.forEach(function(elementValue){
      arraySum += elementValue;
    });
    return arraySum / decimal.length;
  }
}
//Find the index of the highest value in the array
function indexHigh(decimal) {
  var max = highestNum(decimal);
  console.log(max);
  return decimal.indexOf(max);

}
//Sort the array of siblings. Sort the array of parents in reverse
console.log (lowerSiblings.sort().reverse());
console.log(siblings.sort());
console.log(parents.sort().reverse());
var family = parents.concat(siblings).sort();

//Searches the family array for the user prompted name.
function nameExists(elementValue) {
  var userInput = prompt("Enter the name to be searched: ");
  return elementValue === userInput;
}
family.some(nameExists);

//Tests the numbers in the array to see if they are even. If no even numbers, return empty array
function isEven() {
  //Prompt the user for an array. Split and map(Number).
  var userArray = (prompt("Enter an array(numbers separated by spaces): ")).split(" ").map(Number);
  var evenArray = [];
  console.log(userArray);
   //Use forEach to check each index
  userArray.forEach(function(elementValue){
      if(elementValue%2 === 0){
          evenArray.push(elementValue);
      }
  });
  return evenArray;
}

var wholeArray = [2, 2, 2, 2, 2, 2];
function isOdd(array) {
  var oddArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1){
      oddArray.push(array[i]);
    }
  }
    return oddArray;
  }

  function fun(x) {
      return x * 45;
  }
  //Take an array and a function, return a new array with the function applied to the new array elements.
  function mapArray(array, fun) {
    var emptyArray = [];
    array.forEach(function(elementValue) {
      // emptyArray.push(fun(elementValue));
      emptyArray.push(elementValue * 45);
    });
    return emptyArray;
  }


  function fun2(x) {
    return x >= 2.5;
  }
  function funcTrue(array, fun2) {
    var emptyArray = [];
    array.forEach(function(elementValue){
      if(fun2(elementValue)){
        emptyArray.push(elementValue);
      }
    });
  return emptyArray;
  }
