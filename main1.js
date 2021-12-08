function cashReg(cost,price,cid) {
    let stat = {insufficientFunds:"INSUFFICIENT_FUNDS",closed:"CLOSED",open:"OPEN"};
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


    for (let i of cid) {
        if (i[0] == 'ONE HUNDRED') {
            let count = 0;
            let max = i[1];
            do {
                max -= 100;
                count += 1;
            }
            while (max > 0);
            console.log(`100 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'TWENTY') {
            let count = 0;
            let max = i[1];
            do {
                max -= 20;
                count += 1;
            }
            while (max > 0);
            console.log(`20 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'TEN') {
            let count = 0;
            let max = i[1];
            do {
                max -= 10;
                count += 1;
            }
            while (max > 0);
            console.log(`10 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'FIVE') {
            let count = 0;
            let max = i[1];
            do {
                max -= 5;
                count += 1;
            }
            while (max > 0);
            console.log(`5 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'ONE') {
            let count = 0;
            let max = i[1];
            do {
                max -= 1;
                count += 1;
            }
            while (max > 0);
            console.log(`1 dollar bills in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'DIME') {
            let count = 0;
            let max = i[1];
            do {
                max -= .1;
                count += 1;
            }
            while (max > 0);
            console.log(`dimes in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'NICKEL') {
            let count = 0;
            let max = i[1];
            do {
                max -= .05;
                count += 1;
            }
            while (max > 0);
            console.log(`nickels in cash register: ${count}`);
        }
    }

    for (let i of cid) {
        if (i[0] == 'PENNY') {
            let count = 0;
            let max = i[1];
            do {
                max -= .01;
                count += 1;
            }
            while (max > 0);
            console.log(`pennies in cash register: ${count}`);
        }
    }

    console.log(`does customer have enough money to pay? ${customerHasEnough}`);
    console.log(`does cash register have enough money to return customer's change? ${enoughCash}`);
}


cashReg(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// ◆◆◆◆  CASH REGISTER  ◆◆◆◆
// cost: 3.26
// amount paid: 100
// customer's change: 96.74
// money in cash register: 335.41
// [ [ 'ONE HUNDRED', 100 ],
//   [ 'TWENTY', 60 ],
//   [ 'TEN', 20 ],
//   [ 'FIVE', 55 ],
//   [ 'ONE', 90 ],
//   [ 'QUARTER', 4.25 ],
//   [ 'DIME', 3.1 ],
//   [ 'NICKEL', 2.05 ],
//   [ 'PENNY', 1.01 ] ]
// 100 dollar bills in cash register: 1
// 20 dollar bills in cash register: 3
// 10 dollar bills in cash register: 2
// 5 dollar bills in cash register: 11
// 1 dollar bills in cash register: 90
// dimes in cash register: 31
// nickels in cash register: 41
// pennies in cash register: 101
// does customer have enough money to pay? true
// does cash register have enough money to return customer's change? true
