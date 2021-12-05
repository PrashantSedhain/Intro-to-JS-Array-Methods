const houses = [
    { id: 1, location: "Texas", price: 100000, numOfBeds: 10, builtYear: 1997, profitAmount : 20000 },
    { id: 2, location: "Texas", price: 200000, numOfBeds: 8,  builtYear: 2021, profitAmount : 10000 },
    { id: 3, location: "Oklahoma", price: 300000, numOfBeds: 6, builtYear: 2016, profitAmount: 15000 },
    { id: 4, location: "California", price: 400000, numOfBeds: 6, builtYear: 2016, profitAmount: 23000},
];

// Cypher's suggestion without using .map()
function mapValues(houses) {
    ans = [];
    for (let i = 0; i < houses.length; i++) {
      var tempObj = {};
      tempObj["builtYear"] = houses[i].builtYear;
      tempObj["location"] = houses[i].location;
      ans.push(tempObj);
    }
    return ans;
}
console.log(mapValues(houses));

//Chamber's Suggestion using .map()

//ES5
const newMappedValues = houses.map(function findNewMappedValues(house) {
    return {
        year_built : house.builtYear,
        location: house.location
    };
})
console.log(newMappedValues);

//ES6
const newMappedValuesES6 = houses.map(house => {
    return {
        year_built : house.builtYear,
        location: house.location
    };
})
console.log(newMappedValuesES6);


  