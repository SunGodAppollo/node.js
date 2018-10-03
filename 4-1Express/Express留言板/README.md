# 需要使用Express 的中间件 body-parser

专门用来解析表单post请求体
<hr>
``
npm i body-parser
``

然后需要配置

``
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
``

这样配置好后在Req 会多一个body属性,body就是表单post提交的数据
