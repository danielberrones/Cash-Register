function cashRegister(price, cash, cid) {
    var cashValues = [
            ["PENNY", .01],
            ["NICKEL", .05],
            ["DIME", .10],
            ["QUARTER", .25],
            ["ONE", 1],
            ["FIVE", 5],
            ["TEN", 10],
            ["TWENTY", 20],
            ["ONE HUNDRED", 100],
            ];
    cashValues.reverse();
    var output = {status:'', change:[]};
    var cidSum = 0;
    var change = cash - price;
    change = parseFloat(change).toFixed(2);

    function reverseAndSumCashRegister() {
        cid.reverse();
        for (let i of cid) {
            cidSum += i[1];
        }
        cidSum = parseFloat(cidSum).toFixed(2);
    }
    reverseAndSumCashRegister();

    function returnCashValues() {
        for (let i of cashValues) {
            for (let j of cid)
            console.log(i[1],j[1])
        }
        // for (let i of cashValues) {
        //     if (i[0] == "ONE HUNDRED") {
        //         console.log(i[1]);
        //     }
        // }
    }
    returnCashValues();

    return `price ${price} cash ${cash} change ${change} cidSum ${cidSum}`;
}

let cost = 12.19;
let paid = 20;
let drawer = [
            ["PENNY", 2.52],
            ["NICKEL", 2.55],
            ["DIME", 1.20],
            ["QUARTER", 1.50],
            ["ONE", 23],
            ["FIVE", 15],
            ["TEN", 60],
            ["TWENTY", 80],
            ["ONE HUNDRED", 300],
            ];
            
let result = cashRegister(cost, paid, drawer);
console.log(result);
