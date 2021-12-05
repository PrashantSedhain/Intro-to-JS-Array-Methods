const houses = [
    { id: 1, location: "Texas", price: 100000, numOfBeds: 10, builtYear: 1997, profitAmount : 20000 },
    { id: 2, location: "Texas", price: 200000, numOfBeds: 8,  builtYear: 2021, profitAmount : 10000 },
    { id: 3, location: "Oklahoma", price: 300000, numOfBeds: 6, builtYear: 2016, profitAmount: 15000 },
    { id: 4, location: "California", price: 400000, numOfBeds: 6, builtYear: 2016, profitAmount: 23000},
];

// Question : Filter the houses and return houses prices 200,000 or over

const filteredHouses = houses.filter(house => {
    return house.price >= 200000;
})
console.log(filteredHouses);

// Question: Filter the houses and return houses that are built after 1990 in Texas
const filteredHouses2 = houses.filter(house => {
    return house.builtYear >= 1990 && house.location === "Texas"
})
console.log(filteredHouses2);