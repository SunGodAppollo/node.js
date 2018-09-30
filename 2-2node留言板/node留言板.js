var http=require('http');
var fs=require('fs');
var template=require('art-template');

var viewPath='./view';

var server=http.createServer(function(request,response){
   var requestUrl=request.url;
   var filePath='/index.html';
   if(requestUrl!='/'){
     filePath=requestUrl;
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
       var tplFile=template.render(data.toString(),{dataList:messageData});
        response.end(tplFile);
     }
   });

});



//监听端口
server.listen(3000,function(){
  console.log('Server is Start');
});
