var server=require('http');
var fs=require('fs');
var myserver =server.createServer();

var wwwPath='./www';//www目录路径

myserver.on('request',function(request,response){
  var requestUrl=request.url;//请求的路径
  var filePath='/index.html';//默认请求的文件
  if(requestUrl!=='/'){
      filePath=requestUrl;
  }
   filePath=wwwPath+filePath;//组合成完整的路径


  fs.readFile(filePath,function(error,data){

    if(error){
      response.end('404 Not Find Page');
    }else{
      response.end(data);
    }
  });




});

//可以开启多个端口，但是开启的端口不能重复
myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
