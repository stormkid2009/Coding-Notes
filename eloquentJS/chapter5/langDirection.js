//ltr >>>> means language writing from left to right
//rtl >>> ............................ right to left
//The charCodeAt() method returns an integer 
//between 0 and 65535 representing the UTF-16 code unit at the given index.

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