//路由模块 根据请求路径配置请求方法


//引包
const express=require('express');

//mongoDB
const userDb=require('../db/mongodb');

//挂载Express的路由router
const router=express.Router();








//配置请求

//查看用户列表
router.get('/user',function(req,res){
  userDb.find(function(error,data){
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
var newUser=new userDb(user);
newUser.save(function(error,rel){
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
console.log(id);
userDb.findById(id,function(error,data){
  if (error) {
      return res.status(500).send('Server Error!!');
  }else {
    console.log(data);
    res.render('userUpdate.html',{user:data});
  }
});

});

//更新数据
router.post('/user/update',function(req,res){
  var user=req.body;
  userDb.findByIdAndUpdate(user.id,user,function(error,rel){
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
userDb.findByIdAndRemove(id,function(error,rel){
  if (error) {
      return res.status(500).send('Server Error!!');
  }else {
    res.redirect('/user');
  }
});

});


//导出router
module.exports=router;
