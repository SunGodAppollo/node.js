//引入
var template=require('art-template');
var ret = template.render('hello {{name}}',{name:'Tom'});
console.log(ret);
