


const findEditThenSave = (personId, done) => {
    const foodToAdd = 'hamburger';
  
    // .findById() method to find a person by _id with the parameter personId as search key. 
    Person.findById(personId, (err, person) => {
      if(err) return console.log(err); 
    
      // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
      person.favoriteFoods.push(foodToAdd);
  
      // and inside the find callback - save() the updated Person.
      person.save((err, updatedPerson) => {
        if(err) return console.log(err);
        done(null, updatedPerson)
      })
    })
  };

  //Note to export the function:
  exports.findEditThenSave = findEditThenSave;