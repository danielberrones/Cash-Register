function cashRegister(price,cash,cid) {
	cid.reverse();
	var change = cash - price;
	console.log('change',change)
	let cidSum = 0;

	for (let n of cid) {
		cidSum += n[1];
	}
	parseFloat(cidSum).toFixed(2);

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
			// console.log(change -= i);
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

	console.log('cidSum',cidSum);
}

// cashRegister(12,20,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);



cashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


//100 main.js:12:12
//0 main.js:12:12
//endHundred main.js:16:10
//60 main.js:20:12
//40 main.js:20:12
//20 main.js:20:12
//0 main.js:20:12
//endTWENTY main.js:24:10
//20 main.js:28:12
//10 main.js:28:12
//0 main.js:28:12
//endTEN main.js:32:10
//55 main.js:36:12
//50 main.js:36:12
//45 main.js:36:12
//40 main.js:36:12
//35 main.js:36:12
//30 main.js:36:12
//25 main.js:36:12
//20 main.js:36:12
//15 main.js:36:12
//10 main.js:36:12
//5 main.js:36:12
//0 main.js:36:12
//endFIVE main.js:40:10
//90 main.js:45:12
//89 main.js:45:12
//88 main.js:45:12
//87 main.js:45:12
//86 main.js:45:12
//85 main.js:45:12
//84 main.js:45:12
//83 main.js:45:12
//82 main.js:45:12
//81 main.js:45:12
//80 main.js:45:12
//79 main.js:45:12
//78 main.js:45:12
//77 main.js:45:12
//76 main.js:45:12
//75 main.js:45:12
//74 main.js:45:12
//73 main.js:45:12
//72 main.js:45:12
//71 main.js:45:12
//70 main.js:45:12
//69 main.js:45:12
//68 main.js:45:12
//67 main.js:45:12
//66 main.js:45:12
//65 main.js:45:12
//64 main.js:45:12
//63 main.js:45:12
//62 main.js:45:12
//61 main.js:45:12
//60 main.js:45:12
//59 main.js:45:12
//58 main.js:45:12
//57 main.js:45:12
//56 main.js:45:12
//55 main.js:45:12
//54 main.js:45:12
//53 main.js:45:12
//52 main.js:45:12
//51 main.js:45:12
//50 main.js:45:12
//49 main.js:45:12
//48 main.js:45:12
//47 main.js:45:12
//46 main.js:45:12
//45 main.js:45:12
//44 main.js:45:12
//43 main.js:45:12
//42 main.js:45:12
//41 main.js:45:12
//40 main.js:45:12
//39 main.js:45:12
//38 main.js:45:12
//37 main.js:45:12
//36 main.js:45:12
//35 main.js:45:12
//34 main.js:45:12
//33 main.js:45:12
//32 main.js:45:12
//31 main.js:45:12
//30 main.js:45:12
//29 main.js:45:12
//28 main.js:45:12
//27 main.js:45:12
//26 main.js:45:12
//25 main.js:45:12
//24 main.js:45:12
//23 main.js:45:12
//22 main.js:45:12
//21 main.js:45:12
//20 main.js:45:12
//19 main.js:45:12
//18 main.js:45:12
//17 main.js:45:12
//16 main.js:45:12
//15 main.js:45:12
//14 main.js:45:12
//13 main.js:45:12
//12 main.js:45:12
//11 main.js:45:12
//10 main.js:45:12
//9 main.js:45:12
//8 main.js:45:12
//7 main.js:45:12
//6 main.js:45:12
//5 main.js:45:12
//4 main.js:45:12
//3 main.js:45:12
//2 main.js:45:12
//1 main.js:45:12
//0 main.js:45:12
//endONE main.js:49:10
//4.25 main.js:53:12
//4 main.js:53:12
//3.75 main.js:53:12
//3.5 main.js:53:12
//3.25 main.js:53:12
//3 main.js:53:12
//2.75 main.js:53:12
//2.5 main.js:53:12
//2.25 main.js:53:12
//2 main.js:53:12
//1.75 main.js:53:12
//1.5 main.js:53:12
//1.25 main.js:53:12
//1 main.js:53:12
//0.75 main.js:53:12
//0.5 main.js:53:12
//0.25 main.js:53:12
//0 main.js:53:12
//endQUARTER main.js:57:10
//3.1 main.js:61:12
//3 main.js:61:12
//2.9 main.js:61:12
//2.8 main.js:61:12
//2.7 main.js:61:12
//2.6 main.js:61:12
//2.5 main.js:61:12
//2.4 main.js:61:12
//2.3 main.js:61:12
//2.2 main.js:61:12
//2.1 main.js:61:12
//2 main.js:61:12
//1.9 main.js:61:12
//1.8 main.js:61:12
//1.7 main.js:61:12
//1.6 main.js:61:12
//1.5 main.js:61:12
//1.4 main.js:61:12
//1.3 main.js:61:12
//1.2 main.js:61:12
//1.1 main.js:61:12
//1 main.js:61:12
//0.9 main.js:61:12
//0.8 main.js:61:12
//0.7 main.js:61:12
//0.6 main.js:61:12
//0.5 main.js:61:12
//0.4 main.js:61:12
//0.3 main.js:61:12
//0.2 main.js:61:12
//0.1 main.js:61:12
//endDIME main.js:65:10
//2.05 main.js:69:12
//2 main.js:69:12
//1.95 main.js:69:12
//1.9 main.js:69:12
//1.85 main.js:69:12
//1.8 main.js:69:12
//1.75 main.js:69:12
//1.7 main.js:69:12
//1.65 main.js:69:12
//1.6 main.js:69:12
//1.55 main.js:69:12
//1.5 main.js:69:12
//1.45 main.js:69:12
//1.4 main.js:69:12
//1.35 main.js:69:12
//1.3 main.js:69:12
//1.25 main.js:69:12
//1.2 main.js:69:12
//1.15 main.js:69:12
//1.1 main.js:69:12
//1.05 main.js:69:12
//1 main.js:69:12
//0.95 main.js:69:12
//0.9 main.js:69:12
//0.85 main.js:69:12
//0.8 main.js:69:12
//0.75 main.js:69:12
//0.7 main.js:69:12
//0.65 main.js:69:12
//0.6 main.js:69:12
//0.55 main.js:69:12
//0.5 main.js:69:12
//0.45 main.js:69:12
//0.4 main.js:69:12
//0.35 main.js:69:12
//0.3 main.js:69:12
//0.25 main.js:69:12
//0.2 main.js:69:12
//0.15 main.js:69:12
//0.1 main.js:69:12
//0.05 main.js:69:12
//endNICKEL main.js:73:10
//1.01 main.js:78:12
//1 main.js:78:12
//0.99 main.js:78:12
//0.98 main.js:78:12
//0.97 main.js:78:12
//0.96 main.js:78:12
//0.95 main.js:78:12
//0.94 main.js:78:12
//0.93 main.js:78:12
//0.92 main.js:78:12
//0.91 main.js:78:12
//0.9 main.js:78:12
//0.89 main.js:78:12
//0.88 main.js:78:12
//0.87 main.js:78:12
//0.86 main.js:78:12
//0.85 main.js:78:12
//0.84 main.js:78:12
//0.83 main.js:78:12
//0.82 main.js:78:12
//0.81 main.js:78:12
//0.8 main.js:78:12
//0.79 main.js:78:12
//0.78 main.js:78:12
//0.77 main.js:78:12
//0.76 main.js:78:12
//0.75 main.js:78:12
//0.74 main.js:78:12
//0.73 main.js:78:12
//0.72 main.js:78:12
//0.71 main.js:78:12
//0.7 main.js:78:12
//0.69 main.js:78:12
//0.68 main.js:78:12
//0.67 main.js:78:12
//0.66 main.js:78:12
//0.65 main.js:78:12
//0.64 main.js:78:12
//0.63 main.js:78:12
//0.62 main.js:78:12
//0.61 main.js:78:12
//0.6 main.js:78:12
//0.59 main.js:78:12
//0.58 main.js:78:12
//0.57 main.js:78:12
//0.56 main.js:78:12
//0.55 main.js:78:12
//0.54 main.js:78:12
//0.53 main.js:78:12
//0.52 main.js:78:12
//0.51 main.js:78:12
//0.5 main.js:78:12
//0.49 main.js:78:12
//0.48 main.js:78:12
//0.47 main.js:78:12
//0.46 main.js:78:12
//0.45 main.js:78:12
//0.44 main.js:78:12
//0.43 main.js:78:12
//0.42 main.js:78:12
//0.41 main.js:78:12
//0.4 main.js:78:12
//0.39 main.js:78:12
//0.38 main.js:78:12
//0.37 main.js:78:12
//0.36 main.js:78:12
//0.35 main.js:78:12
//0.34 main.js:78:12
//0.33 main.js:78:12
//0.32 main.js:78:12
//0.31 main.js:78:12
//0.3 main.js:78:12
//0.29 main.js:78:12
//0.28 main.js:78:12
//0.27 main.js:78:12
//0.26 main.js:78:12
//0.25 main.js:78:12
//0.24 main.js:78:12
//0.23 main.js:78:12
//0.22 main.js:78:12
//0.21 main.js:78:12
//0.2 main.js:78:12
//0.19 main.js:78:12
//0.18 main.js:78:12
//0.17 main.js:78:12
//0.16 main.js:78:12
//0.15 main.js:78:12
//0.14 main.js:78:12
//0.13 main.js:78:12
//0.12 main.js:78:12
//0.11 main.js:78:12
//0.1 main.js:78:12
//0.09 main.js:78:12
//0.08 main.js:78:12
//0.07 main.js:78:12
//0.06 main.js:78:12
//0.05 main.js:78:12
//0.04 main.js:78:12
//0.03 main.js:78:12
//0.02 main.js:78:12
//0.01 main.js:78:12
//endPENNY main.js:82:10
//cidSum 335.41 main.js:85:10
