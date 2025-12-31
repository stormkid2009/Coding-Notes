# Destructuring

```js
let user = {
  firstName:"sherif",
  secondName:"ahmed"
}
```
***unpack object props into variables which we can use easily for each.***

```js
let { firstName: x, secondName: y } = user;
const fullName = (first, last) => {
  console.log(`your name is ${first} ${last}`);
};

fullName(x, y);
//if variable has the same name we can do this
let {firstName,secondName} = user;
console.log(firstName,secondName);
```

**destructure array**
```js
let Arr=[1,2,3,4,5];
let [a,b,,c,d]=Arr;
//we omit the third element in the array as we have only 4 variables
console.log(a,b,c,d);   // output 1 2 4 5
```

-----------------------
# Spread

***in this section we will cover array spread
as the name telling spread the elements of iterable or string***


```js
let arr=[1,2,3,4,...[5,6]];
console.log(arr); //output [1,2,3,4,5,6]
```
**here we join to existing array another one  with two or more elements[5,6] using the spreed operator**


***Spreading arguments of a function look at examples below:***
```js
function sum (x,y,s){
    return x + y+ s;
}
let nums = [100,200,700];
console.log(sum(...nums));  // output 1000


//using spread with string
let spellName =[..."sherif"];
console.log(spellName);   // output [ 's', 'h', 'e', 'r', 'i', 'f' ]
console.log(..."sherif");  // output  s h e r i f
```

***Spread with object (new in ecma 2018)***
```js
let obj={
    id:122,
    name:"sherif"
}
let newObj={...obj,age:42};
console.log(newObj);  // output { id: 122, name: 'sherif', age: 42 }
```

------------------------
# Rest Operator

***The flexibilty of have any number of variables we want as (args)***

**Note:**
* There is only one "rest parameter".
* Only the last parameter can be a "rest parameter".
* rest parameter is actually an array of args(so we can array's functions and props with it)

```js
const sum = (...args) =>{
    return args.reduce((accumulate,current)=>{
        return accumulate + current;
    });
}
console.log(sum(35,77,44,66)); //output 222

function multiply(...args){
    return args.reduce((x,y)=>{
        return x * y;
    });
}
console.log(multiply(4,5,5,10)); //output 1000

function multiplyN2(x,y,...args){
    return x * y * (args.reduce((acc,curr)=>{
        return acc * curr;
    }));
}
console.log(multiplyN2(4,5,5,10)); //output 1000

const checkLen = (...args) => args.length;
console.log(checkLen(5,6,7,8)); //should give 4 which is the length of rest array
```

-------------------------------
# High Order Functions

***It is a function that accepts another func as argument or within its body like (map , filter , reduce)***

**arr.map   returns new array as acopy from the origin one**
```js
let Arr=['A','B','C'];
let newArr = Arr.map(item=>item+"+");
//the callback function iterate over array's element and do the action
console.log(newArr);  // output [ 'A+', 'B+', 'C+' ]
```

**arr.filter  return new array which elements satisfy certain condition**
```js
let theArr = newArr.filter(item=> item === "B+");
console.log(theArr);  // output [ 'B+' ]
``` 
**arr.reduce >>> return new array with reduce numeric elements to one as sum**
```js
let array = [1,2,3,4];
let reducer=array.reduce((accumlator,current)=> accumlator+current);
console.log(reducer);  // output 10
```

------------------------
# Class

**Classes are a template for creating objects.**

```js
//Class Declaration
class Person {
    constructor(job){
        this.job = job;
    }
    speak(phrase){
        console.log(`
        The ${this.job} person says ${phrase}
        `);
    }
};

let Ahmed = new Person('engineer');
Ahmed.speak(`I create software!!`);
//Class expression to define class alson
let Person = class {} //unnamed
Person = class {}     //named
```

```js
let rabbit = {};
rabbit.speak= function(phrase){
    console.log(`${phrase}`)
};
rabbit.speak(`I am hungry ,I need carrots`)

//we can use Object.prototype  =>  Object.create(object) to make instance from object
let rabbit = {
    speak(line){
      console.log(`${this.type} rabbit says ${line}`)
    }
  }
  
  let whiteRabbit = Object.create(rabbit);
  whiteRabbit.type = "white"
  whiteRabbit.speak(`I am hungry, I need carrots !`);
```

---------------------------
# Promise
***Promise is promise ^^***
* here we are talking about value probably we can get or not in the future and it represents asynchrous action.
* Promise has 3 states [pending,fulfilled,rejected]
  
```js

const checkColor=(color)=>{
    return new Promise((resolve,reject)=>{
        if (color==="red"){
            resolve('You suppoer Ahly Team !!')
        }else{
            reject('sadly You choose the wrong Team !!')
        }
    });
}
//call the function which return a promise
checkColor('red')
.then(result => console.log(result)) //if resolved
.catch(err => console.log(err))      //if rejected

//Promise.all if all promise fulfilled
const promise1 =  Promise.resolve(3);
const promise2 = Promise.resolve(4);
const promise3 = new Promise((resolve,reject)=>{
  setTimeout(resolve,5000,'sherif')
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
  console.log(values)
})
```

