const houses = [
    { id: 1, location: "Texas", price: 100000, numOfBeds: 10, builtYear: 1997, profitAmount : 20000 },
    { id: 2, location: "Texas", price: 200000, numOfBeds: 8,  builtYear: 2021, profitAmount : 10000 },
    { id: 3, location: "Oklahoma", price: 300000, numOfBeds: 6, builtYear: 2016, profitAmount: 15000 },
    { id: 4, location: "California", price: 400000, numOfBeds: 6, builtYear: 2016, profitAmount: 23000},
];

// Question : Find the cost of all the houses for Simpson
const totalCost = houses.reduce((accumulator, curHouse) => {
    return accumulator + curHouse.price;
}, 0);

console.log(totalCost);

// Question : Find the total amount of profit Simpson makes after selling all the houses
const totalProfit = houses.reduce((accumulator, curHouse) => {
    return accumulator + curHouse.profitAmount;
}, 0);

console.log(totalProfit);