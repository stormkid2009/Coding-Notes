
* simulate js method every which check every element to certain condition and return true or false
```js

const every=(arr,test)=>{
    for(let el of arr){
        if(!test(el)){
            return false;
            break;
        }else{
            continue;
        }
    }
    return true;
}
//seems so funny :) 
//let's start from right to left:
//test(1 < 10) >>>true  !true = false 
//we have false and the method some needs at least one true then test(3 < 10) the same
//then test(5 < 10) the same
//arr.some <<< false  to the condition none is greater than 10
//!arr.some >>>> true
const every2=(arr,test)=>{
    return !arr.some(el=>!test(el));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));

```