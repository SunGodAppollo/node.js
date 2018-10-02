//require('art-template');//art-template 中加载的index文件已经修改


require('a');//加载自定义的第三方模块在node_modules中


//如果第三方模块没有package.json 或者 package.json中的
//main所对应的入口文件不存在则会自动加载该模块下的index.js
//也就是说index.js是模块的默认选项
require('b');

//如果当前文件同级目录没有node_modules则会进入上一级目录查找node_modules
//直到磁盘的根目录

//一般一个项目只有一个node_modules且放在项目的根目录
