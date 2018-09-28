var server=require('http');
var myserver =server.createServer();
myserver.on('request',function(request,response){
  var rurl=request.url;
  var text;
  console.log('请求路径'+request.url);
  if(rurl=='/'){
    text="root";
  }else if(rurl=='/index'){
    text="index"
  }else if (rurl=='/home') {
    text='home'
  }

  //response.write('hello word');
  response.end(text);
});

myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
