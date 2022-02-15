function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var cidSum = 0;
  var listOfValues = [100,20,10,5,1,.25,.1,.05,.01];
  var arr = [];
  // console.log('list of values',listOfValues);
  // for (let i of listOfValues) {console.log(i)}
  cid.reverse();
  // console.log('cid\n',cid);

  function decrementValus() {
    for (let i of cid) {
      arr.push(i[1]);
    }
    return arr;
  }
  console.log(decrementValus());

  // for (let j of listOfValues) {
  //   console.log(j)
  // }

  // console.log('');
  // cid.forEach(x=> {
  //   listOfValues.forEach(y=> {
  //     // while (x[1] > 0) {
  //     //   console.log(x[1] - y);
  //     // }
  //     // console.log(y);
  //     console.log(cid[x]);
  //     // console.log(x[1]);
  //     // console.log('end');
  //   });
  // });

  for (let i = 0; i < cid.length; i++) {cidSum += cid[i][1]};
  cidSum = parseFloat(cidSum).toFixed(2);

  console.log('cidSum', cidSum);
  return `change ${change} = cash ${cash} - price ${price}`;
}

// let c = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
let d = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// console.log(c);
console.log(d);
