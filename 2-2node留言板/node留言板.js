var http=require('http');
var url=require('url');//路径解析
var fs=require('fs');
var template=require('art-template');

var viewPath='./view';

//设置全局信息存储
 var messageData=[
         {name:'Tom',
          message:'I think this is Good',
          date: '2018-9-29'
        },
        {name:'Jerry',
         message:'I su',
         date: '2018-9-29'
       },
     ];

var server=http.createServer(function(request,response){
   var requestUrl=request.url;
   var urlObj=url.parse(requestUrl,true);
   requestUrl=urlObj.pathname;

   var filePath='/index.html';
   if(requestUrl!='/'){
     filePath=requestUrl;
   }
   //查看是否是添加信息-特殊
   if(requestUrl=='/addMeg'){
	   var addData=urlObj.query;
     addData.date='2018-9-30';
     //messageData.push(addData);
     //在数组头部添加
     messageData.unshift(addData);
     //重定向
     response.statusCode=302;
     response.setHeader('Location','/');
     response.end();
	   return ;
   }

   requestPath=viewPath+filePath;
   if(requestUrl.indexOf('/public/')==0){
     requestPath='.'+filePath;
     fs.readFile(requestPath,function(error,data){
       if(error){
         response.end('404 Not Find Page');
       }else{
          response.end(data);
       }
     });
     return;
   }

   console.log(requestPath);

   fs.readFile(requestPath,function(error,data){
     if(error){
       response.end('404 Not Find Page');
     }else{

       var tplFile=template.render(data.toString(),{dataList:messageData});
        response.end(tplFile);
     }
   });

});



//监听端口
server.listen(3000,function(){
  console.log('Server is Start');
});
