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