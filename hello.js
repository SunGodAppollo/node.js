var foo="hello"
var fs=require('fs');


fs.readFile('data/read.txt',function(error,data){
    console.log(data.toString());
});
、
