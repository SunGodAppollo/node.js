var server=require('http');
var fs=require('fs');
var myserver =server.createServer();
myserver.on('request',function(request,response){
    var requestfile=request.url;
      //设置相应数据编码
    //response.setHeader('Content-Type','text/plain; charset=utf-8');

   fs.readFile('./resource'+requestfile,function(error,data){
     if(error){
       response.end('404 Not Find Page');
     }else{
       //注意text/plain和text/html的区别 不同的资源对应的Content-Type是不一样的
       response.setHeader('Content-Type','text/html; charset=utf-8');
       response.end(data);
     }
   });



});

//可以开启多个端口，但是开启的端口不能重复
myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
