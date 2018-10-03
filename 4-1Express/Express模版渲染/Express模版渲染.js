//引包
const express=require('express');

//全局信息数据
var dataList=[
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
//第一个参数 art 表示以 .art结尾的文件的时候,使用art-template模版引擎
//express-art-template 是专门用来在Express 中把 art-template整合到Express中
//虽然外面这里不需要记载art-template 但是也必须安装
//原因在于 express-art-template 依赖与 art-template
app.engine('html',require('express-art-template'));




//列表显示页
app.get('/',function(req,res){

//Express 为Response 提供了一个响应的房间叫render
//render方法是不可以使用的 ,但是如果配置了上面的模版引擎就可以使用了
//使用方法
//Response.render('html模版',{模版数据});
//第一个参数如果不写路径，默认会去views中查找模版
//也就是说 Express 默认会吧所有的视图文件放到views目录中
//如果想要修改视图渲染目录可以 app.set('views','视图渲染目录路径');

//后缀名必须和上面配置的app.engine的第一个参数一致
res.render('index.html',{dataList:dataList});
});


//添加信息页
app.get('/addPage',function(req,res){
res.render('addpage.html');
});

//添加信息操作
app.post('/addPage',function(req,res){
res.send('Add');
});




//监听端口
app.listen(3000,function(){
  console.log('express is Start!!!');
});
