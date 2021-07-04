/*
in this section we will cover destructure in ecma 6 

*/

let user = {
  firstName:"sherif",
  secondName:"ahmed"
}

//unpack object props into variables which we can use easily for each.

let { firstName: x, secondName: y } = user;
const fullName = (first, last) => {
  console.log(`your name is ${first} ${last}`);
};

fullName(x, y);

//destructure array
let Arr=[1,2,3,4,5];
let [a,b,,c,d]=Arr;
console.log(a,b,c,d);
