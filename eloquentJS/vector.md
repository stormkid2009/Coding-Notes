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
