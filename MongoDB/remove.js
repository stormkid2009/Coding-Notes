//Model.remove() is useful to delete all the documents matching given criteria.

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove({name:nameToRemove},function(err,response){
      if(err) return console.log(err);
      done(null,response);
    });
  };