//路由模块 根据请求路径配置请求方法


//引包
const fs=require('fs');
const express=require('express');

//设置文件数据库路径
const dbPath='./db.json';

//挂载Express的路由router
const router=express.Router();


//配置请求
router.get('/user',function(req,res){
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

//导出router
module.exports=router;
