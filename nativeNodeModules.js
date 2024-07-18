// Native Node Modules --- tool kit
// Eg : FileSystem, HTTP ....
const fs = require("fs")

fs.writeFile("message.txt", "Hello world", (err)=>{
    if(err) throw err;
    console.log("File created successfully");
});

fs.readFile("message.txt",'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data); 
});

// Or

fs.readFile("message.txt",(err,data)=>{
    if(err) throw err;
    console.log(data.toString()); 
});

