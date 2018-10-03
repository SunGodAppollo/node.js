//引包
const express=require('express');
const fs=require('fs');

//设置文件数据库路径
const dbPath='./db.json';

//创建服务器
const app=express();

//配置公共资源
app.use(express.static('./public'));

//配置使用art-template 模版引擎
app.engine('html',require('express-art-template'));


//配置请求
app.get('/',function(req,res){
  fs.readFile(dbPath,'utf-8',function(error,data){
    if(error){
      return res.status(500).send('Server Error!!');
    }else {
      res.render('index.html',{
        user:JSON.parse(data).user
      });
    }
  });



});

//监听端口
app.listen(3000,function(){
  console.log('Server is Start');
});
