function checkCashRegister(price, cash, cid) {
    let output = {status: "", change:[]};
    let change = cash - price;
    let cidSum = 0;
    for (let i of cid) {cidSum += i[1]};
    parseFloat(cidSum).toFixed(2);
    // should always return {status:"SOMETHING",change:[]}
    // 3 CONDITIONS
  
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
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
