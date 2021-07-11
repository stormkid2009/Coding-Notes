
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