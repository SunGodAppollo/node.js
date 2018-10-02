//引包
const express=require('express');

//创建Server

const app=express();

app.get('/',function(req,res){
res.send('Hello Express');
});


//监听端口
app.listen(3000,function(){
  console.log('express is Start!!!');
});
