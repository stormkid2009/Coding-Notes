/*
we can use Model.findByIdAndRemove(conditions,callBack);
or Model.findOneAndRemove(conditions,callback);

*/

const  removeById = (personId,done) =>{
    Person.findByIdAndRemove(personId,(err,removedDoc)=>{
        if(err) return console.log(err);
        done(null,removedDoc)
    });
};