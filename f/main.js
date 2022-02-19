function checkCashRegister(price, cash, cid) { var countArr = [];
	cid.reverse();
	var output = {status: '', change: []};
	var change = cash - price;
	console.log('cash',cash);
	console.log('price',price);
	console.log('change',change);
	for (let i of cid) {
		console.log(i);
	}
	let sum = 0;
	for (let i of cid) {
		sum += i[1];
	}
//	console.log(sum);
	sum = parseFloat(sum).toFixed(2);

	for (let i of cid) {
    		if (i[0] == 'ONE HUNDRED') {
      		let count = 0;
	      	let max = i[1];
     		 do {
					 // console.log(change);
					 // console.log(max);
          	max -= 100;
        //   finalChange -= moneyValues['ONE HUNDRED'];
          	count += 1;
        //   finalChange -= 100;
      }
      while (max > 0);
      countArr.push(count);
      console.log(`100 dollar bills in cash register: ${count}`);
    //   console.log(`finalChange: ${finalChange}`);
    }
    else if (i[0] == 'TWENTY') {
        let count = 0;
        let max = i[1];
        do {
            max -= 20;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`20 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'TEN') {
        let count = 0;
        let max = i[1];
        do {
            max -= 10;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`10 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'FIVE') {
        let count = 0;
        let max = i[1];
        do {
            max -= 5;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`5 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'ONE') {
        let count = 0;
        let max = i[1];
        do {
            max -= 1;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`1 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'QUARTER') {
        let count = 0;
        let max = i[1];
        do {
            max -= .25;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`quarters in cash register: ${count}`);
    }
    else if (i[0] == 'DIME') {
        let count = 0;
        let max = i[1];
        do {
            max -= .1;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`dimes in cash register: ${count}`);
    }
    else if (i[0] == 'NICKEL') {
        let count = 0;
        let max = i[1];
        do {
            max -= .05;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`nickels in cash register: ${count}`);
    }
    else if (i[0] == 'PENNY') {
        let count = 0;
        let max = i[1];
        do {
            max -= .01;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`pennies in cash register: ${count}`);
    }
}



	// console.log('Math.floor(change/100))',Math.floor(change / 100));
	// console.log('Math.floor(change/20))',Math.floor(change / 20));
	// console.log('Math.floor(change/10))',Math.floor(change / 10));
	// console.log('Math.floor(change/5))',Math.floor(change / 5));
	// console.log('Math.floor(change/1))',Math.floor(change / 1));
	// console.log('Math.floor(change/.25))',Math.floor(change / .25));
	// console.log('Math.floor(change/.10))',Math.floor(change / .10));
	// console.log('Math.floor(change/.05))',Math.floor(change / .05));
	// console.log('Math.floor(change/.01))',Math.floor(change / .01));
	//

	if (sum < change || change % sum !== 0) {
		output.status = 'INSUFFICIENT_FUNDS';
		return output;
	}
	else if (change === sum) {
		output.status = 'CLOSED';
		output.change = cid;
	}
		// code











//	return '';
	//return change;
	return sum;
}

//let solution = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
let solution = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(solution);
