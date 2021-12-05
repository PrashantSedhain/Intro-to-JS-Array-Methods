const arr = [1,2,3,4,5];

// Question : Return a new array containing square of each element in the array.

// Without .map()
function findSquaresWithoutMap(arr) {
  answer = [];

  for(let i = 0; i < arr.length; i++) {
    var squaredValue = arr[i] * arr[i];
    answer.push(squaredValue);  
  }

  return answer;
}
console.log(findSquaresWithoutMap(arr));


// Using .map()
const arrTimesTwo = arr.map(function findSquare(item) {
  return item * item;
})
console.log(arrTimesTwo);


// Find sqrt of each element using map
const sqrtOfArr = arr.map(function sqrtOfArray(item) {
  return Math.sqrt(item);
})
console.log(sqrtOfArr);


// Using index with map
const findNumAndIndex = arr.map(function findNumAndIndex(item, index) {
  return {index : index, item: item};
})
console.log(findNumAndIndex);
