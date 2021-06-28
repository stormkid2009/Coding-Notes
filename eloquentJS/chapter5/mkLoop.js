//using high order functions:
//we use 3 callback functions to do our work:
//condition to check our looping state and stop it if false;
//update the number 
//log the result on the screen;


const loop=(n,condition,update,log)=>{
    for(let i=n;condition(i);i=update(i)){
       log(i);
    }
   
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);