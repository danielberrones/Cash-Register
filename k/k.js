function checkCashRegister(price, cash, cid) {
  cid.reverse();
  var change = cash - price;
  var cidSum = 0;
  for (let i = 0; i < cid.length; i++) {cidSum += cid[i][1]};
  cidSum = parseFloat(cidSum).toFixed(2);
  console.log('cidSum', cidSum);
  for (let i of cid) {
    console.log(i[0]);
    console.log(i[1] - change);
  }
  return `change ${change} = cash ${cash} - price ${price}`;
}

// let c = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
let d = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


// console.log(c);
console.log(d);
