//请查看
//引入art-template
var server=require('http');
var fs=require('fs');
var template=require('art-template');

var tplPath='./tpl';//模版存放路径
var myserver =server.createServer();

myserver.on('request',function(request,response){
      var requestUrl=request.url;//请求的路径
      var filePath='/index.html';//默认请求的文件
      if(requestUrl!=='/'){
          filePath=requestUrl;
      }
       filePath=tplPath+filePath;//组合成完整的路径


      fs.readFile(filePath,function(error,data){

        if(error){
          response.end('404 Not Find Page');
        }else{
          var ret = template.render(data.toString(),{name:'Tom'});
          response.end(ret);
        }
  });
});


  //可以开启多个端口，但是开启的端口不能重复
  myserver.listen(3000,function(){

    console.log('服务器启动成功');
  });
