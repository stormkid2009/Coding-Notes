/*
high order function is a function accepts another func as argument or within its body
for example (map , filter , reduce)
*/
//map  >>> return new array from the origin one
let Arr=['A','B','C'];
let newArr = Arr.map(item=>item+"+");
//console.log(newArr);

//filter >>> return new array which satisfy certain condition
let theArr = newArr.filter(item=> item === "B+");
//console.log(theArr);

//reduce >>> return new array with reduce numeric elements to one as sum
let array = [1,2,3,4];
let reducer=array.reduce((accumlator,current)=> accumlator+current);
console.log(reducer);
