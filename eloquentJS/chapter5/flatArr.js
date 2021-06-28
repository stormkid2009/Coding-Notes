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