function checkCashRegister(price,cash,cid) {
  cid.reverse();
  var change = cash - price;
  var cashValues = [100,20,10,5,1,.25,.1,.05,.01];
  var cidArr = [];
  for (let i of cid) {cidArr.push(i[1]);}
  cidArr.forEach((first,i) => {
    const val = cashValues[i];
    console.log(first,val);
  });
  console.log(cidArr);
  console.log(cashValues);

  // return change;
}

let result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 500]]);
console.log(result);
