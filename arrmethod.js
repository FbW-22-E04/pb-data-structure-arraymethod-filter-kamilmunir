
let d=[5,3,8,1,6]

function filf(arr,a,b){
let res1= arr.filter((item)=>{
  return item>=a && item<=b

})
return res1
}
const res=(filf(d,1,4))
console.log(res)
/*
2. Write a function filterRangeInPlace(arr, a, b)
 that gets an array arr and removes from it all values except those that are between a and b.
  The test is: a ≤ arr[i] ≤ b.

    The function should only modify the array. It should not return anything.

For instance
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]
*/

let arrm = [5, 3, 8, 1];
function mod(arr,l,m){
  for(x=0;x<arr.length;x++){
    if(arrm[x]>=l && arrm[x]<=m){
      0
      console.log('true')
    }else{
      arrm.splice(x,1)
      console.log('false')
    }
  }
}
let dd=(mod(arrm,2,4))
console.log(arrm)