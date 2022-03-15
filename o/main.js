function checkCashRegister(price, cash, cid) {
  cid.reverse();
  let result = {status: "", change: []};
  let change = cash - price;
  let cidSum = 0;
  let cashValues = [100,20,10,5,1,.25,.1,.05,.01];
  let arr = [];
  // cash in drawer sum
  for (let i of cid) {cidSum += i[1]};
  cidSum = cidSum.toFixed(2);


  cid.map(x=> {
    for (let y of cashValues) {
      arr.push(x[1],y);
    }
  });
  console.log(arr);


  // while (change > 0 && cidSum > 0) {
  //   for (let i of cid) {
  //
  //   }
  // }

  console.log({price,cash,change,cidSum});
  return "";
}


let output = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(output);
