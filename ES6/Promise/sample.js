
const checkColor=(color)=>{
    return new Promise((resolve,reject)=>{
        if (color==="red"){
            resolve('You suppoer Ahly Team !!')
        }else{
            reject('sadly You choose the wrong Team !!')
        }
    });
}

checkColor('red')
.then(result => console.log(result))
.catch(err => console.log(err))