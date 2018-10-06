//路由模块 根据请求路径配置请求方法


//引包
const express=require('express');

//挂载Express的路由router
const router=express.Router();

//加载模型
const userModel=require('../model/userModel');

//设置文件数据库路径
const dbPath='./db.json';




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
userModel.addUser(user,function(error){
  if(error){
    return res.status(500).send('Server Error!!');
  }else {
    res.redirect('/user');
  }
});

});

//更新修改页面
router.get('/user/update',function(req,res){
var id=req.query.id;
userModel.findUserById(id,function(error,data){
  if (error) {
      return res.status(500).send('Server Error!!');
  }else {
    res.render('userUpdate.html',{user:data});
  }
});

});

//更新数据
router.post('/user/update',function(req,res){
  var user=req.body;
  userModel.updateUser(user,function(error){
    if(error){
        return res.status(500).send('Server Error!!');
    }else {
      res.redirect('/user');
    }
  });
});

//删除数据

router.get('/user/Delete',function(req,res){
var id=req.query.id;
userModel.DeleteUser(id,function(error){
  if (error) {
      return res.status(500).send('Server Error!!');
  }else {
    res.redirect('/user');
  }
});

});


//导出router
module.exports=router;
