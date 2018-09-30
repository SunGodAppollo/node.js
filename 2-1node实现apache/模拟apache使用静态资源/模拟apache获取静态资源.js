//请查看node/npmdome/dome1
//引入
var server=require('http');
var fs=require('fs');

var viewPath='./view';
var staticPath='./static';

var myserver =server.createServer(function(request,response){
var requestPath=request.url;
var findFile='/index.html';
    if(requestPath!='/'){
      findFile=requestPath;
    }
    //判断是否请求静态资源
    if(requestPath.indexOf('/static/')==0){
      var findFilePath='.'+findFile;
    }else{
      var findFilePath=viewPath+findFile;
    }

    console.log(findFilePath);
   fs.readFile(findFilePath,function(error,data){
     if(error){
         response.end('404 Not Find Page');
     }else{
         response.end(data);
     }
   })

});




  //可以开启多个端口，但是开启的端口不能重复
  myserver.listen(3000,function(){

    console.log('服务器启动成功');
  });
