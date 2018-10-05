//路由模块 根据请求路径配置请求方法


//引包
const fs=require('fs');
const express=require('express');

//加载模型
const userModel=require('../model/userModel');

//设置文件数据库路径
const dbPath='./db.json';

//挂载Express的路由router
const router=express.Router();


//配置请求

//查看用户列表
router.get('/user',function(req,res){
  userModel.findAllUser(function(error,data){
      if(error){
        return res.status(500).send('Server Error!!');
      }else {
        res.render('index.html',{
          user:data
        });
      }
  });
});

//添加用户页面
router.get('/user/add',function(req,res){
res.render('useradd.html');
});

//添加用户操作
router.post('/user/add',function(req,res){
var user=req.body;
console.log(user);
userModel.addUser(user,function(error){
  if(error){
    return res.status(500).send('Server Error!!');
  }else {
    res.redirect('/user');
  }
});

});

//导出router
module.exports=router;
