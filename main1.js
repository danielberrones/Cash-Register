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
    console.log(`does customer have enough money to pay? ${customerHasEnough}`);
    console.log(`does cash register have enough money to return customer's change? ${enoughCash}`);

    for (let i of cid) {
        if (i[0] == 'ONE HUNDRED') {
            let zero = 0;
            let count = 0;
            let max = i[1];
            do {
                max -= 100;
                count += 1;
            }
            while (max > zero);
            console.log(`100 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'TWENTY') {
            let zero = 0;
            let count = 0;
            let max = i[1];
            do {
                max -= 20;
                count += 1;
            }
            while (max > zero);
            console.log(`20 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'TEN') {
            let zero = 0;
            let count = 0;
            let max = i[1];
            do {
                max -= 10;
                count += 1;
            }
            while (max > zero);
            console.log(`10 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'FIVE') {
            let zero = 0;
            let count = 0;
            let max = i[1];
            do {
                max -= 5;
                count += 1;
            }
            while (max > zero);
            console.log(`5 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'ONE') {
            let zero = 0;
            let count = 0;
            let max = i[1];
            do {
                max -= 1;
                count += 1;
            }
            while (max > zero);
            console.log(`1 dollar bills in cash register: ${count}`);
        }
    }
}

// cashReg(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
cashReg(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// cashReg(13, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 0], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 0]]);
// console.log("-------------------------------------")
