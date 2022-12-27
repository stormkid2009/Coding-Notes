# what is typescript?
it s super set of javascript and it add types features to js. 

## inference: 
typescript is smart enough to detect types from your code 

```typescript
const name = 'sherif'; //typescript here will detect the variable (name)  of type 'string'


```
## defining types:
telling typescript what types should be.  

* interface  
it is preferable to use interface over type.
```typescript
interface Person {
    name:string;
    age:number;
}
let student:Person = {
    name:'ahmed',
    age:13,
}

```

* type  
use type when you need specific features like union or generics  
```typescript
//we will use the above example
type Gender = 'male' | 'female' ;
type Subjects = Array<string> ;
interface Person {
    name:string;
    age:number;
    gender:Gender;
    subjects:Subjects;
}
let student:Person = {
    name:'ali',
    age:14,
    gender:'male',
    subjects:[
        'arabic','maths','english'
    ]
}

```
## Unions:  
when you need the possiblity for the combination of more than one type  
```typescript
let id:string | number ;
id = 1; // is valid
id = 'student01'; // is valid too


```
## Generics:
allow us to create 'type variables' we can use with class or function and make it easier to reuse the code as we declare type on time of call the function or make instance of the class.  

```typescript
//function example

interface Warrior {
  type:string;
  name:string;
}
interface Mage {
  type:string;
  name:string;
}

function getFighterClass<Type>(obj:Type):Type {
  return obj;
}

console.log(getFighterClass<Warrior>({
  type:'str',
  name:'twohanded-sword'
}));
//output: { type: 'str', name: 'twohanded-sword' }
console.log(getFighterClass<Mage>({
  type:'int',
  name:'wizard'
}));
//output: { type: 'int', name: 'wizard' }

//class example:
interface Character {
  type:string;
  name:string;
  attack:number;
  defense:number;
}

class Warrior<T> {
  constructor(public value:T){}
  info():T {
    return this.value;
  }
}

const vanhelsing = new Warrior<Character>({
  type:'str',
  name:'twohanded-sword',
  attack:70,
  defense:100,
})

console.log(vanhelsing.info())
//output : { type: 'str', name: 'twohanded-sword', attack: 70, defense: 100 }
```
