
function sumArray (a,b,c,d){
    return a+b+c+d;
}
let result = sumArray(1,2,3,4);
console.log(result);

var arr = [34, 56, 78, 79, 102];
function sum(total, num) {
    return total + num;
}
console.log(arr.reduce(sum, 0));