/**
数据操作模块只负责处理数据
*/
const fs=require('fs');

const DB='./db.json'

/*
获得所有用户
return []
*/
exports.findAllUser=function(callback){
  fs.readFile(DB,'utf-8',function(error,data){
      if (error) {
        callback(error,null);
      }else {
        callback(null,JSON.parse(data).users);
      }

  });
}
/*
根据id查找user
*/
exports.findUserById=function(id,callback){
  fs.readFile(DB,'utf-8',function(error,data){
      if (error) {
        callback(error,null);
      }else {
        //查找指定id的user
        var users=JSON.parse(data).users;
        var findUser=users.find(function(item){
                    return item.id===id;
        });
        callback(null,findUser);
      }

  });
}



/*
添加用户
*/
exports.addUser=function(user,callback){
  fs.readFile(DB,'utf-8',function(error,data){
      if (error) {
        callback(error);
      }else {
        var users=JSON.parse(data).users;
        //设置id
        user.id =+users[users.length-1].id+1;
        user.id=user.id.toString();
        //添加
        users.push(user);

        var saveString=JSON.stringify({
          users:users
        });
        //写入数据
        fs.writeFile(DB,saveString,function(error){
          if(error){
            callback(error);
          }else {
            callback(null);
          }
        });
      }

  });
}
/*
修改用户
*/
exports.updateUser=function(user,callback){
  fs.readFile(DB,'utf-8',function(error,data){
      if (error) {
        callback(error);
      }else {
        var users=JSON.parse(data).users;

        //查找指定id的user
        var users=JSON.parse(data).users;
        var findUser=users.find(function(item){
                    return item.id===user.id;
        });
        //修改
        for(var key in findUser){
          findUser[key]=user[key];
        }

        var saveString=JSON.stringify({
          users:users
        });
        //写入数据
        fs.writeFile(DB,saveString,function(error){
          if(error){
            callback(error);
          }else {
            callback(null);
          }
        });
      }

  });
}
