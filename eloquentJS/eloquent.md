# EveryThing

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

-------------------------------

# Flat Array

```js

const Flattening=(arr)=>{
    let array=[];
    for(let item of arr){
        for(let i=0;i<item.length;i++){
            array=[...array,item[i]]
        }
    }
    return array;
}
console.log(Flattening([[1,2],[3,4],[5,6,7,8,9]]));

```

----------------------------
# Language Direction:

* ltr  means: language writing's direction is from left to right
* rtl  means: language writing's direction is from right to left
* The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

```js

const langDirction =(string)=>{
    for(let i=0;i<string.length;i++){
        if(string.charCodeAt(i)>255){
            return 'rtl';
        }else{
            return 'ltr';
        }
    }
}

console.log(langDirction('hello'));
console.log(langDirction('واقعی'));

```

------------------------------------

# Make a loop:
* using high order functions:
* we use 3 callback functions to do our work:
* condition to check our looping state and stop it if false;
* update the number 
* log the result on the screen;

```js

const loop=(n,condition,update,log)=>{
    for(let i=n;condition(i);i=update(i)){
       log(i);
    }
   
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);

  ```

  ------------------------------------
  # Vector:
  ```js

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get length() {
    //return Math.floor(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  //for doing this we pass the other new vec as param so we can calc values
  plus(another) {
    return new Vec(this.x + another.x, this.y + another.y);
  }
  //the same like plus 
  minus(another) {
    return new Vec(this.x - another.x, this.y - another.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
```

