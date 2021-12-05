arr = [1,4,5,6,12,25,16,22,78,54,20];
names = ["Justin", "Denish", "Preston", "Zuckerberg", "PrashantSedhain"];

// Question: Filter the array of numbers to return numbers greater than or equal to 50 only

const filteredArr = arr.filter((item) => {
    return item >= 50;
});
console.log(filteredArr);

// Question : Filter the array of names and return names that has length of more than 6
const filteredNames = names.filter((name) => {
    return name.length > 6;
})
console.log(filteredNames);

