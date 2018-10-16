//引包
const express=require('express');
const path=require('path');
const artTemplate=require('art-template');

//启动服务
const app=express();

//开放public目录资源
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));

//配置使用art-template 模版引擎
app.engine('html',require('express-art-template'));

//
app.get('/',function(req,res){
  res.render('index.html');
});

//监听端口
app.listen(3000,function(){
console.log('Server is Start ');
});
