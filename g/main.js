function cashRegister(price, cash, cid) {
    cid.reverse();

    let change = cash - price;
    for (let i = 0; i < cid.length; i++) {
        console.log(cid[i])
    }

	function reduceHUNDRED() {
		for (let i = cid[0][1]; i >= 0; i -= 100) {
			console.log(Number(parseFloat(i).toFixed(2)));
		}
	}
	reduceHUNDRED();
	console.log('endHundred')	
	
	function reduceTWENTY() {
		for (let i = cid[1][1]; i >= 0; i -= 20) {
			console.log(Number(parseFloat(i).toFixed(2)));
		}
	}
	reduceTWENTY();
	console.log('endTWENTY')	
	
	function reduceTEN() {
		for (let i = cid[2][1]; i >= 0; i -= 10) {
			console.log(Number(parseFloat(i).toFixed(2)));
		}
	}
	reduceTEN();
	console.log('endTEN')	
	
	function reduceFIVE() {
		for (let i = cid[3][1]; i >= 0; i -= 5) {
			console.log(i);
		}
	}
	reduceFIVE();
	console.log('endFIVE')	
	
	function reduceONE() {
		for (let i = cid[4][1]; i >= 0; i -= 1) {
			console.log(i);
		}
	}
	reduceONE();
	console.log('endONE')	
	
	function reduceQUARTER() {
		for (let i = cid[5][1]; i >= 0; i -= .25) {
			console.log(i);
		}
	}
	reduceQUARTER();
	console.log('endQUARTER')	
	
	function reduceDIME() {
		for (let i = cid[6][1]; i >= 0; i -= .10) {
			console.log(Number(parseFloat(i).toFixed(2)));
		}
	}
	reduceDIME();
	console.log('endDIME')	
	
	function reduceNICKEL() {
		for (let i = cid[7][1]; i >= 0; i -= .05) {
			console.log(Number(parseFloat(i).toFixed(2)));
		}
	}
	reduceNICKEL();
	console.log('endNICKEL')	
	

	function reducePENNY() {
		for (let i = cid[8][1]; i >= 0; i -= .01) {
			console.log(Number(parseFloat(i).toFixed(2)));
		}
	}
	reducePENNY();
	console.log('endPENNY')	
    return "";
}

// let result = cashRegister(12, 20, [["ONE HUNDRED", 200],["TWENTY", 80],["TEN", 60],["FIVE", 35],["ONE", 88],["QUARTER", 5.25],["DIME", 2.20],["NICKEL", 1.65],["PENNY", .88]]);

let solution = cashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// console.log(result);
console.log(solution);