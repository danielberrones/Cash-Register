<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background:linear-gradient(to right, #040404, #000000, #1f1c1c);
            /* background: rgb(2,0,36); */
/* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); */
            /* background:charcoal; */
        }
    </style>
</head>
<body>
    



    <script>


function cashReg(cost,price,cid) {
    let moneyValues = {"ONE HUNDRED":100,
                        "TWENTY":20,
                        "TEN":10,
                        "FIVE":5,
                        "ONE":1,
                        "QUARTER":0.25,
                        "DIME":.10,
                        "NICKEL":0.05,
                        "PENNY":0.01
                        }
    let objValues = Object.values(moneyValues);
    // for (let i of objValues) {
    //     console.log(i);
    // }
    cid = cid.reverse(); 
    let diff = price - cost;
    let sum = 0;
    for (let i of cid) {
        sum += i[1];
    }
    let adjSum = parseFloat(sum).toFixed(2);
    let returnValue = objValues.map(x=>x-adjSum);
    for (let i of returnValue) {
        console.log(i);
        // console.log(returnValue[i]);
    }
    // console.log(returnValue);
    // console.log(adjSum);
    // console.log(`must return ${diff}`);
    console.log(`delete ${diff} from ${adjSum}`);
    console.log(`cid remaining balance will be: ${parseFloat(adjSum-diff).toFixed(2)}`);

    
    // for (let i of cid) {
    //     // i = parseFloat(i).toFixed(2);
    //     // console.log(i[0]);
    //     if (i[0] == "ONE HUNDRED") {
    //         i[1] -= moneyValues["ONE HUNDRED"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "TWENTY") {
    //         i[1] -= moneyValues["TWENTY"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "TEN") {
    //         i[1] -= moneyValues["TEN"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "FIVE") {
    //         i[1] -= moneyValues["FIVE"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "ONE") {
    //         i[1] -= moneyValues["ONE"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "QUARTER") {
    //         i[1] -= moneyValues["QUARTER"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "DIME") {
    //         i[1] -= moneyValues["DIME"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "NICKEL") {
    //         i[1] -= moneyValues["NICKEL"];
    //         console.log(i[1]);
    //     }
    //     if (i[0] == "PENNY") {
    //         i[1] -= moneyValues["PENNY"];
    //         console.log(i[1]);
    //     }
    // }

    
}


cashReg(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);



    </script>
</body>
</html>
