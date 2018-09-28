var server=require('http');
var myserver =server.createServer();
myserver.on('request',function(request,response){
  var arr=[
    {name:'Tom',
    age:10},
    {name:'Jerry',
    age:9},
    {name:'Dmy',
    age:13}
  ];


  response.end(JSON.stringify(arr));
});

myserver.listen(3000,function(){

  console.log('服务器启动成功');
});
