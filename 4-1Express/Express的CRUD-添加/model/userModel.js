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
添加用户
*/
exports.addUser=function(user,callback){
  fs.readFile(DB,'utf-8',function(error,data){
      if (error) {
        callback(error);
      }else {
        var users=JSON.parse(data).users;
        //设置id
        console.log(user);
        user.id =+users[users.length-1].id+1;
        console.log(user);
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
