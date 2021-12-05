arr = [1,4,5,6,12,25,16,22,78,54,20];
names = ["Justin", "Denish", "Preston", "Zuckerberg", "PrashantSedhain"];

// Question : Find the sum of all the elements in the array using reduce
const sumOfArr = arr.reduce((accumulator, curVal) => {
    return accumulator + curVal;
});
console.log(sumOfArr);

// Find the sum of array when initial value is 1000
const sumOfArr2 = arr.reduce((accumulator, curVal) => {
    return accumulator + curVal;
}, 1000);
console.log(sumOfArr2);