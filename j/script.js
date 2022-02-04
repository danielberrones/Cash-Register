function checkCashRegister(price, cash, cid) {
  // let cidReverse = cid.reverse();
  let result = {status: "", change: []};
  let change = cash - price;
  let cidSum = 0;
  for (let i of cid) {cidSum += i[1]};
  cidSum = parseFloat(cidSum).toFixed(2);


  if (change == cidSum) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }
  if (change > cidSum || change % cidSum !== 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  } 
  
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

