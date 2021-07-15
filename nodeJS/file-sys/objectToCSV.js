const objectsToCsv = require('objects-to-csv');

let list =[
    {
        name:"sherif",
        age:42
    },
    {
        name:"raul",
        age:29
    },
    {
        name:"osama",
        age:11
    },
    {
        name:"farah",
        age:5
    },
    {
        name:"sama",
        age:17
    },
    {
        name:"akram",
        age:13
    },
    {
        name:"sayed",
        age:22
    }

];

const makeCSV = async()=>{
    const csv = new objectsToCsv(list);
    await csv.toDisk('./list.csv');
}

makeCSV().then(()=>console.log(`created successfully`)).catch(err => console.log(err))