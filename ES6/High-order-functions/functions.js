/*
in this section we will cover 3 of high order functions
in javascript (map , filter , reduce)
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
