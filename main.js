function checkCashRegister(price, cash, cid) {
  for (let i = 0; i < cid.length; i++) {
    // console.log(cid[i]); // ["PENNY", 1.01], ["NICKEL", 2.05] ["DIME", 3.1], 
    // console.log(cid[i][0]); // "PENNY", "NICKEL", "DIME", etc
    console.log(cid[i][1]); // 1.01, 2.05, 3.1     $ amount in 2d array, 1st index
    // console.log('end');
  }
  // console.log(cid.length);
    // return `${price}\n${cash}\n${cid[2][1]}`;
    return '';
  }
  
let c = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
  ]
);

console.log(c);

