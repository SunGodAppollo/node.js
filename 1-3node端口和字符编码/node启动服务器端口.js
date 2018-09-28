var server=require('http');
var myserver =server.createServer();
myserver.on('request',function(request,response){

  response.end('get request');
});

//可以开启多个端口，但是开启的端口不能重复
myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
