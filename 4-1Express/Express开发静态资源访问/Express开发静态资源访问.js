//引包
const express=require('express');

//创建Server

const app=express();

//设置可访问目录
//开发公共资源
//http://127.0.0.1:3000/public/img.png
//app.use('/public/',express.static('./public'));


//也可以设置成多层的目录
//http://127.0.0.1:3000/a/b/c/img.png
//app.use('/a/b/c/',express.static('./public'));


//当省略第一个参数的时候 默认请求路径是 '/'
//http://127.0.0.1:3000/img.png
app.use(express.static('./public'));



//根据请求配置
app.get('/',function(req,res){
res.send('Hello Express');
});

app.get('/about',function(req,res){
  console.log(req.query);
res.send('我是 Express！！！！！');
});




//监听端口
app.listen(3000,function(){
  console.log('express is Start!!!');
});
