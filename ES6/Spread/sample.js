/*
in this section we will cover array spread
as the name telling spread the elements of iterable or string
*/
//we join to arr another array with tow more elements[5,6] using the spreed
let arr=[1,2,3,4,...[5,6]];
//we use reduce func to sum all the elements of the array
console.log(arr.reduce((a,b)=>a+b));
//spreading arguments of a function look at 2 examples below
function sum (x,y,s){
    return x + y+ s;
}
let nums = [100,200,700];
console.log(sum(...nums));


//using spread with string
let spellName =[..."sherif"];
console.log(spellName);
console.log(..."sherif");


//spread with object (new in ecma 2018)
let obj={
    id:122,
    name:"sherif"
}
let newObj={...obj,age:42};
console.log(newObj);

