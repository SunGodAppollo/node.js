var name = 'model2';

function add(number1,number2){
  return number1+number2;
}

exports.add=add;


exports.str='my is model2';


//直接导出
//module.exports=add;


//多个成员导出
module.exports={
  add:add,
  str:'hello'
}

//底层 原理 重要理解
//var module={
//  exports={};
//}

//var exports=module.exports;
//书写的代码


//return module.exports;
