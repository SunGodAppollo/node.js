var server=require('http');
var myserver =server.createServer();
myserver.on('request',function(request,response){

  //设置相应数据编码
  response.setHeader('Content-Type','text/plain; charset=utf-8');
  response.end('node 你好');
});

//可以开启多个端口，但是开启的端口不能重复
myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
