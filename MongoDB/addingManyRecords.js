//importing .env library
require('dotenv').config();
//importing mongoose
const mongoose = require('mongoose');
//connecting mongoose to our database atlas
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
//importing  Schema
const Schema = mongoose.Schema;
//creating our Schema
const personSchema = new Schema({
    name:{type:String,required:true},
    age:{type:Number},
    favoriteFoods:[String]
});
//make instance of our Schema
const Person = mongoose.model('Person',personSchema);
//function to save our record
const createAndSavePerson = (done) => {
  
    var sherif = new Person({
      name:"sherif",
      age:42,
      favoriteFoods:["pizza","pasta"]
    });
    sherif.save(function(err,data){
           if (err) return console.error(err); 
           done(null , data);
                });
           
  };
//define array of our objects
const arrayOfPeople = [
    {name:"Ahmed",age:23,favoriteFoods:['koshery','falafel']},
    {name:"Ali",age:33,favoriteFoods:['molokhia','ful']},
    {name:"Farah",age:5,favoriteFoods:['koshery','riz']},
    {name:"Sara",age:11,favoriteFoods:['fruits','muffin']}
];
//create many records for many people with Model.create and pass our array to it.
const createManyPeople = (arrayOfPeople,done)=>{
    
    Person.create(arrayOfPeople,function(err,people){
        if(err) return console.error(err);
        done(null,people);
    });
    

};
//Note we shall export all functions so we can reuse them in other places.
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.createManyPeople = createManyPeople;

