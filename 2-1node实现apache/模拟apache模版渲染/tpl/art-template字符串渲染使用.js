//请查看node/npmdome/dome1
//引入
var server=require('http');
var template=require('art-template');


var myserver =server.createServer();

myserver.on('request',function(request,response){



      var tplStr='<!DOCTYPE html><html lang="en" dir="ltr"><head><meta charset="utf-8"><title></title></head><body>hello{{name}}</body></html>';
      var ret = template.render(tplStr,{name:'Tom'});
      response.end(ret);
  });


  //可以开启多个端口，但是开启的端口不能重复
  myserver.listen(3000,function(){

    console.log('服务器启动成功');
  });
