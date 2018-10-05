//引包
const express=require('express');
const fs=require('fs');

//用户路由router
const user=require('./router/user');

//创建服务器
const app=express();

//配置公共资源
app.use(express.static('./public'));

//配置使用art-template 模版引擎
app.engine('html',require('express-art-template'));


//分发路由
app.use(user);


//监听端口
app.listen(3000,function(){
  console.log('Server is Start');
});

//
