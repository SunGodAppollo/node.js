//引包
const express=require('express');
const bodyParser=require('body-parser');
//全局信息数据
var dataLists=[
        {name:'Tom',
         message:'I think this is Good',
         date: '2018-9-29'
       },
       {name:'Jerry',
        message:'I su',
        date: '2018-9-29'
      },
    ];

//创建Server
const app=express();

//配置公共资源
app.use(express.static('./public'));

//配置使用art-template 模版引擎
app.engine('html',require('express-art-template'));

//配置body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//列表显示页
app.get('/',function(req,res){
res.render('index.html',{dataList:dataLists});
});


//添加信息页
app.get('/addPage',function(req,res){
res.render('addpage.html');
});

//添加信息操作
app.post('/addPage',function(req,res){
//req.query只能拿到get参数

//post请求使用 body-parser拿到
console.log(req.body);

var postData=req.body;
postData.date='2018-10-3';
dataLists.unshift(postData);
res.redirect('/');
});





//监听端口
app.listen(3000,function(){
  console.log('express is Start!!!');
});
