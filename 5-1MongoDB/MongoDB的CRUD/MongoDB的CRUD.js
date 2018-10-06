//引包
const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');
//用户路由router
const user=require('./router/user');

//创建服务器
const app=express();

//配置公共资源
app.use(express.static('./public'));

//配置使用art-template 模版引擎
app.engine('html',require('express-art-template'));



//配置body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//分发路由
app.use(user);


//监听端口
app.listen(3000,function(){
  console.log('Server is Start');
});

//
