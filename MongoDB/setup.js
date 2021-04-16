/*
MongoDB is NoSql database it give fast performance
as we use key/value pair .
We will use mongo atlas  [cloud service of mongo]

*/
//npm install mongodb
//npm install mongoose
const mongoose = require('mongoose');
//we save MONGO_URI AS variable in .env file .
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
/*
first of all we need to create a schema: maps to mongodb collection.
>>>It defines the shape of the documents within that collection. 
Schemas are building block for Models
 A model allows you to create instances of your objects, called documents.

*/
//create Schema
const Schema = mongoose.Schema ;
const personSchema = new Schema({
    name : {type:String ,required:true},
    age :  Number,
    favoriteFoods : [String]
});
//create model
const Person = mongoose.model('Person',personSchema);

//create and  save  a record of a model
//within this function we will do this mission

const createAndSavePerson =(done)=>{
    //new instance from our model
    var Sherif = new Person({
        name:"Sherif",
        age:42,
        favoriteFoods:["pizza","mahshi","koshery"]
    });
    //save our record by callBack the function document.save()
    Sherif.save(function(err,data){
        if(err) return console.error(err);
        done(null,data);
    });


}