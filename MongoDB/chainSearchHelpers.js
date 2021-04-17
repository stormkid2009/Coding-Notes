/* Chain Search Query Helpers to Narrow Search Results */
/*
If you don’t pass the callback as the last argument to Model.find() (or to the other search
methods), the query is not executed.
You can store the query in a variable for later use.
This kind of object enables you to build up a query using chaining syntax. 
The actual db search is executed when you finally chain the method .exec().
You always need to pass your callback to this last method. 

Modify the queryChain function to find people who like the food specified by the variable
named foodToSearch. Sort them by name, limit the results to two documents, and hide their
age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the
done(err, data) callback to exec(). */

const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({favoriteFoods:foodToSearch})
      .sort({name:'asc'}) //sort ascending
      .limit(2) //only 2 fields
      .select('name favoriteFoods') //included fields
      .exec((err,result)=>{
      if(err) return console.log(err);
      done(null,result)
    });
  };
  