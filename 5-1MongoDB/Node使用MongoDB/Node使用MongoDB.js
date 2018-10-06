//初次使用
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db1');

const Cat = mongoose.model('Cat', { name: String });

//添加
// const kitty = new Cat({ name: 'kitty' });
// kitty.save(function(error,rel){
//   if (error) {
//     console.log('插入失败');
//   }else {
//     console.log(rel);
//   }
// });

//查询
Cat.find(function(error,rel){
  if (error) {
    console.log('查询失败');
  }else {
    console.log(rel);
  }
});


//条件查询
// Cat.find({
//   name:'Zildjian'
// },function(error,rel){
//   if (error) {
//     console.log('查询失败');
//   }else {
//     console.log(rel);
//   }
// });

//只查询一个
// Cat.findOne(function(error,rel){
//   if (error) {
//     console.log('查询失败');
//   }else {
//     console.log(rel);
//   }
// });


//删除
// Cat.remove({
//   name:'Zildjian'
// },function(error,rel){
// if (error) {
//   console.log(error);
// }else {
//   console.log(rel);
// }
// });

//更新
// Cat.findByIdAndUpdate('5bb867185389a60658e9e530',{name:"Tom"},function(error,rel){
// if (error) {
//   console.log(error);
// }else {
//   console.log(rel);
// }
// });
