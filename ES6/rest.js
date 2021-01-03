/*we will cover rest operator in this section :
the flexibilty of have any number of variables we want
in the next example with rest parameter (args)
Note:
#there is only one "rest parameter".
#Only the last parameter can be a "rest parameter".
#"rest parameter" is an array(so we can array's functions and props with it)
*/

const sum = (...args) =>{
    return args.reduce((accumulate,current)=>{
        return accumulate + current;
    });
}
//console.log(sum(35,77,44,66));

function multiply(...args){
    return args.reduce((x,y)=>{
        return x * y;
    });
}
//console.log(multiply(4,5,5,10));

function multiplyN2(x,y,...args){
    return x * y * (args.reduce((x,y)=>{
        return x * y;
    }));
}
//console.log(multiplyN2(4,5,5,10));

const checkLen = (...args) => args.length;
console.log(checkLen(5,6,7,8)); //should give 4