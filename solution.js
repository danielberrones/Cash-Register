function checkCashRegister(price, cash, cid) {
  var countArr = [];
  cid.reverse();
  let moneyValues = { "ONE HUNDRED":100,
                      "TWENTY":20,
                      "TEN":10,
                      "FIVE":5,
                      "ONE":1,
                      "QUARTER":0.25,
                      "DIME":.10,
                      "NICKEL":0.05,
                      "PENNY":0.01
                    };
  let output = {status: "", change:[]};
  let change = cash - price;
  var finalChange = change;
  let cidSum = 0;

  for (let i of cid) {cidSum += i[1]};
  parseFloat(cidSum).toFixed(2);
  // should always return {status:"SOMETHING",change:[]}
  // 3 CONDITIONS
  console.log(`finalChange: ${finalChange}`);

  for (let i of cid) {
    if (i[0] == 'ONE HUNDRED') {
      let count = 0;
      let max = i[1];
      do {
          max -= 100;
          count += 1;
        //   finalChange -= 100;
      }
      while (max > 0);
      countArr.push(count);
      console.log(`100 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'TWENTY') {
        let count = 0;
        let max = i[1];
        do {
            max -= 20;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`20 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'TEN') {
        let count = 0;
        let max = i[1];
        do {
            max -= 10;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`10 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'FIVE') {
        let count = 0;
        let max = i[1];
        do {
            max -= 5;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`5 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'ONE') {
        let count = 0;
        let max = i[1];
        do {
            max -= 1;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`1 dollar bills in cash register: ${count}`);
    }
    else if (i[0] == 'QUARTER') {
        let count = 0;
        let max = i[1];
        do {
            max -= .25;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`quarters in cash register: ${count}`);
    }
    else if (i[0] == 'DIME') {
        let count = 0;
        let max = i[1];
        do {
            max -= .1;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`dimes in cash register: ${count}`);
    }
    else if (i[0] == 'NICKEL') {
        let count = 0;
        let max = i[1];
        do {
            max -= .05;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`nickels in cash register: ${count}`);
    }
    else if (i[0] == 'PENNY') {
        let count = 0;
        let max = i[1];
        do {
            max -= .01;
            count += 1;
        }
        while (max > 0);
        countArr.push(count);

        console.log(`pennies in cash register: ${count}`);
    }
}


    console.log(finalChange)
    for (i in cid) {
      console.log(cid[i][1] > finalChange);

        }
    //   console.log(cid[i][1] > finalChange);

    // if cid < change || you cannot return exact change
    // 1{status: "INSUFFICIENT_FUNDS", change: []}
    if (cidSum < change || change % cidSum !== 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    // IF cid == change due 
    // 2{status: "CLOSED", change: [...]}
    if (cidSum == change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }
  
  
  
    // otherwise return change, sorted high to low, as change key value
    // 3{status: "OPEN", change: [...]}
  
    return output;

  }
  
  let solution = checkCashRegister(1.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

  console.log(solution);
