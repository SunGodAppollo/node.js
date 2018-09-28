//必须加./
console.log('model is start');
var number=100;
function say(){
  console.log('my is m1');
}
require('./m2');
console.log(number);//不会被模块m2定义的数据修改 每个模块是独立的
say();//成员和方法是独立不会相互调用
