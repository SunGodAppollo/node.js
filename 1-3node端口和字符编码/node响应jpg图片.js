var server=require('http');
var fs=require('fs');
var myserver =server.createServer();
myserver.on('request',function(request,response){
    var requestfile=request.url;


    if(requestfile=='/image'){
      fs.readFile('./resource/image.jpg',function(error,data){
        if(error){
          response.end('404 Not Find Page');
        }else{
          //注意image/jpeg不需要设置编码
          response.setHeader('Content-Type','image/jpeg');
          response.end(data);
        }
      });
      

    }



});

//可以开启多个端口，但是开启的端口不能重复
myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
