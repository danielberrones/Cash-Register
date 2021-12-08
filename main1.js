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

cashReg(103, 100, [["PENNY", .22], ["NICKEL", 12.85], ["DIME", 23.1], ["QUARTER", 4.75], ["ONE", 250], ["FIVE", 65], ["TEN", 210], ["TWENTY", 120], ["ONE HUNDRED", 300]]);

// ◆◆◆◆  CASH REGISTER  ◆◆◆◆
// cost: 103
// amount paid: 100
// customer's change: -3
// money in cash register: 985.92
// [ [ 'ONE HUNDRED', 300 ],
//   [ 'TWENTY', 120 ],
//   [ 'TEN', 210 ],
//   [ 'FIVE', 65 ],
//   [ 'ONE', 250 ],
//   [ 'QUARTER', 4.75 ],
//   [ 'DIME', 23.1 ],
//   [ 'NICKEL', 12.85 ],
//   [ 'PENNY', 0.22 ] ]
// 100 dollar bills in cash register: 3
// 20 dollar bills in cash register: 6
// 10 dollar bills in cash register: 21
// 5 dollar bills in cash register: 13
// 1 dollar bills in cash register: 250
// dimes in cash register: 231
// nickels in cash register: 257
// pennies in cash register: 22
// does customer have enough money to pay? false
// does cash register have enough money to return customer's change? true
