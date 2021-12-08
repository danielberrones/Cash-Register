function cashReg(cost,price,cid) {
    stat = {insufficientFunds:"INSUFFICIENT_FUNDS",closed:"CLOSED",open:"OPEN"};
    let priceDiff = price - cost;
    let customerHasEnough = price > cost;
    let sum = 0;
    for (let cash in cid) {
        sum += cid[cash][1];
    }
    let adjSum = parseFloat(sum).toFixed(2);
    let enoughCash = adjSum > priceDiff;
    console.log('◆◆◆◆  CASH REGISTER  ◆◆◆◆')
    console.log(`cost: ${cost}`);
    console.log(`amount paid: ${price}`);
    console.log(`customer's change: ${priceDiff}`);
    console.log(`money in cash register: ${adjSum}`);
    console.log(cid.reverse());

    // for (let cash in cid) {
    //     console.log(cid[cash]);
    // }
    console.log(`does customer have enough money to pay? ${customerHasEnough}`);
    console.log(`does cash register have enough money to return customer's change? ${enoughCash}`);

    // console.log(cid.sort().reverse());
    // let arr = [];
    // for (let i = 0; i < cid.length; i++) {
    //     arr.push(cid[i][1]);
    // }

    // for (let x in cid) {
    //     cid[x] = cid[x][1].sort(function(a,b){return a-b});
    // }
    // console.log(cid);
    // console.log(cid[1].sort(function(a,b){b-a}));
    // console.log(cid);

    // console.log(`does cash register have the bills/coins customer's change? have enough money to pay? ${bool}`);
    // console.log('sorted cash in drawer');

}

// cashReg(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
cashReg(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// cashReg(13, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 0], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 0]]);
// console.log("-------------------------------------")


































// cashReg(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// should return {status: "OPEN", change: [["QUARTER", 0.5]]

// cashReg(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// cashReg(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// cashReg(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// cashReg(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
