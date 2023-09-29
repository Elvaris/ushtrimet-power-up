const {sum} = require ('./detyrat');
sum ('num1,num2');

let arr1=[2,4,6,7,2];
let arr2=[2,5,6,4,7];

let arr3=[]

for(let i in arr1){
  arr3.push(arr1[i] +arr2[i] )
}
console.log(arr3);