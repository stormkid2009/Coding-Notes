//using Model.findOneAndUpdate({condition},{object to update},{option},(callBack));

const findAndUpdate = (personName,done) =>{
    const updateAge = 20
    Person.findOneAndUpdate({name:personName},{age:updateAge},{new:true},(err,data)=>{
        if(err) return console.log(err);
        done(null,data);
    })
};
//or
/*
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};
*/