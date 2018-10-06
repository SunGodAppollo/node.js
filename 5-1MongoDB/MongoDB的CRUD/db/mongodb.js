//引包
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/db1');
const User = mongoose.model('User', { name: String ,age:String,like:String});

//导出User
module.exports=User;
