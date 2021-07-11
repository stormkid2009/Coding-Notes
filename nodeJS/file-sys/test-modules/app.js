const fs = require('fs');

//reading data from existing file data.json
fs.readFile('./data.json',"utf-8",(err,data)=>{
    if(err) throw err
    try {
        //turn json string to valid javascript object with parse method
        let update = JSON.parse(data);
        //adding the new value to the array and transform it to valid json with stringify
        update = JSON.stringify([...update,{name:"eino"}],null,2);
        console.log(update);
        //write back to whole data to json file
        fs.writeFile('./data.json',update,(err)=>{
            if(err) throw err
        })
    } catch (error) {
        console.log(err)
    }
});


