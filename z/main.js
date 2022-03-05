function checkCashRegister(price, cash, cid) { // let cidReverse = cid.reverse();
  let result = {status: "", change: []};
  let change = cash - price;
  let cidSum = 0;
  let cashValues = [100,20,10,5,1,.25,.1,.05,.01];

  // cash in drawer sum
  for (let i of cid) {cidSum += i[1]};
  cidSum = parseFloat(cidSum).toFixed(2);
  console.log({price,cash,change,cidSum}) 

  for (let [i,j] of cid) {
	  let variable = cashValues[j];
	  console.log(i,variable)
  }
 //  if (change == cidSum) {
 //   result.status = "CLOSED";
 //   result.change = cid;
 //   return result;
 // }
 //  if (change > cidSum || change % cidSum !== 0) {
 //   result.status = "INSUFFICIENT_FUNDS";
 //   return result;
 // }
 //  else {
 //   result.status = "OPEN";
 //   return result;
 // }
}

//let output = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])


let output = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

console.log(output);
