function checkCashRegister(price, cash, cid) {
  cid.reverse();
  var cashValues = [100,20,10,5,1,.25,.1,.05,.01];
  var change = cash - price;
  var cashInDrawerSum = 0;
  for (let x of cid) {cashInDrawerSum += x[1]};
  cashInDrawerSum = parseFloat(cashInDrawerSum).toFixed(2);

  // let max = cid[0][1];
  // console.log('max');
  // console.log(max);
  // console.log(cid[0][1]); // 500
  // console.log(cashValues[0]); // 100
  function hundred() {
    console.log(cid[0][1]);
    while (cid[0][1] > 0) {
      console.log(cid[0][1] = cid[0][1] - cashValues[0]);
    }
  }

  hundred();

  console.log('cid');
  for (let x of cid) {console.log(x[1])};

  console.log('cashValues');
  for (let x of cashValues) {console.log(x)};
  console.log('cashInDrawerSum');
  return cashInDrawerSum;
}

let result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 500]]);
console.log(result);
