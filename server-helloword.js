var server=require('http');
var myserver =server.createServer();
myserver.on('request',function(request,response){
  console.log('请求路径'+request.url);
  //response.write('hello word');
  response.end('good end1111');
});

myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
