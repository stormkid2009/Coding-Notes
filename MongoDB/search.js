


const findPeopleByName = (personName, done) => {
    Person.find({name:personName},function(err,personFound){
      if(err) return console.error(err);
      done(null , personFound);
    })
    
  };
  
  const findOneByFood = (food, done) => {
    Person.findOne({favoriteFoods:food},function(err,data){
      if(err) return console.error(err);
      done(null,data);
    });
    
  };
  
  const findPersonById = (personId, done) => {
    Person.findById({_id:personId},function(err,data){
      if(err) return console.error(err);
      done(null,data);
    });
    
  };

  //Note we shall export all these functions so we can reuse them again.

exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;

