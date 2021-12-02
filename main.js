function checkCashRegister(price, cash, cid) {
    let stat = ["INSUFFICIENT_FUNDS","CLOSED","OPEN"];
    let changeArr = [];
    let paymentDiff = cash - price;
    // sum of cash-in-drawer 
    let cashInDrawerSum = 0;
    for (let i in cid) {
        cashInDrawerSum += cid[i][1];
    }
    if (cashInDrawerSum < paymentDiff || paymentDiff % cashInDrawerSum !== 0) return {status:stat[0], change:changeArr};
    if (cashInDrawerSum == paymentDiff) return {status:stat[1], change:cid};
    // console.log(cashInDrawerSum,'cashInDrawerSum');
    // console.log(paymentDiff,'paymentDiff');
}






// RETURN OBJECT
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// should return an object.
// 335.40999999999997 cashInDrawerSum
// 0.5 paymentDiff





// OPEN
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// 335.40999999999997 cashInDrawerSum
// 0.5 paymentDiff

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// 335.40999999999997 cashInDrawerSum
// 96.74 paymentDiff







//INSUFFICIENT_FUNDS
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "INSUFFICIENT_FUNDS", change: []}.
// 0.01 cashInDrawerSum
// 0.5 paymentDiff

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "INSUFFICIENT_FUNDS", change: []}.
// 1.01 cashInDrawerSum
// 0.5 paymentDiff







//CLOSED
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// 0.5 cashInDrawerSum
// 0.5 paymentDif
