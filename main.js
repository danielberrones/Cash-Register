function checkCashRegister(price, cash, cid) {
    // cash values
    let cashValues = {  "ONE HUNDRED":100,
                        "TWENTY":20,
                        "TEN":10,
                        "FIVE":5,
                        "ONE":1,
                        "QUARTER":.25,
                        "DIME":.10,
                        "NICKEL":.05,
                        "PENNY":.01
                    }

    // high to low
    cid.reverse()

    // customers change
    let change = cash - price;
    change = parseFloat(change).toFixed(2);
    
    // cash-in-drawer sum
    let cidSum = 0;
    for (let i of cid) {
        cidSum += i[1];
    }
    cidSum = parseFloat(cidSum).toFixed(2);

    // main algo
    // while (change >= 0) {
    //     for (let n of cid) {
    //         // console.log(n[1]);
    //     } 
    // }
    for (let j = 0; j < change; j+=cashValues["TWENTY"]) {
        for (let n of cid) {
            if (n[1] == "TWENTY") {
                console.log(n[1]);
            }
        }
        // console.log(j);
    } 
   
    console.log(`price ${price} cash ${cash}`);
    console.log(`change ${change} cidSum ${cidSum}`);
    return '';
  }
  
//   let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
 
  let result1 = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 120], ["ONE HUNDRED", 100]])

  


//   console.log(result);
  console.log(result1);