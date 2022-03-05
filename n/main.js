function cashRegister(price, cash, cid) {
  cid.reverse();

  var cashValues = [100,20,10,5,.25,.1,.25,.05,.01];
  // console.log(cashValues[0]);
  var change = cash - price;
  var output = {status: "", change: []};
  var cidSum = 0;

  // for (let i of cid) {console.log(i);}
  // cid.forEach((x)=>console.log(x[1]));
  // cid.forEach((x)=>cidSum+=x[1]);
  // cid.forEach()

  // for (let i = 0; i < cid.length; i++) {
  //   for (let j = 0; j < cashValues.length; j++) {
  //     console.log(cid[i]);
  //     // console.log(cid[j]);
  //   }
  // }

  // return cidSum;
  return {price,cash,change,cidSum,cid};
  // var result = cidSum - change;
  // return {cidSum - change};
  // return parseFloat(result).toFixed(2);
}


let solution = cashRegister(3.56, 100, [["PENNY", 1.01],["NICKEL", 2.05],["DIME", 3.10],["QUARTER", 4.25],["ONE", 52],["FIVE", 35],["TEN", 80],["TWENTY", 60],["ONE HUNDRED", 300]])
console.log(solution);
