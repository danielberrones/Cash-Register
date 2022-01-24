let arr = [1,2,3,5];
let reducer = (accum, curr) => accum + curr;
function reduceArr(){
    return arr.reduce(reducer);
}
let result = reduceArr();
console.log(result) // 10
