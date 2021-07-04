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