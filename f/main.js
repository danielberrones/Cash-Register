function checkCashRegister(price, cash, cid) {
	cid.reverse();
	var output = {status: '', change: []};
	for (let i of cid) {
		console.log(i);
	}
	let change = cash - price;
	let sum = 0;
	for (let i of cid) {
		sum += i[1];
	}
//	console.log(sum);
	sum = parseFloat(sum).toFixed(2);

	if (sum < change || change % sum !== 0) {
		output.status = 'INSUFFICIENT_FUNDS';
		return output;
	}

	if (change === sum) {
		output.status = 'CLOSED';
		output.change = cid;
	} 
	








//	return '';
	//return change;
	return sum;
}

let solution = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(solution);
