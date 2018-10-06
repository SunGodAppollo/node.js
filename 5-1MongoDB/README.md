# MongoDB

下载地址
``
https://www.mongodb.com/
``

将安装的bin目录添加到环境变量



检查是否安装成功 控制台中
``
mongod
``

效果
``
2018-10-06T14:04:57.439+0800 I CONTROL  [initandlisten] now exiting
2018-10-06T14:04:57.439+0800 I CONTROL  [initandlisten] shutting down with code:100
``

查看mongoDB的版本

``
mongod --version
``

<hr>
# 启动和关闭

## 启动
``
mongod --dbpath=D:\MongoDB\data\db
``

## 停止
关闭cmd窗口或者 ctrl+c
<hr>
# 链接MongoDB

1.在开始mongod 的情况下 新开一个cmd窗口

2.输入``mongo``

3.退出 ``exit``
<hr>
# 基本操作
1.show dbs :查看数据库

2.use 数据库名字 ：切换到指定数据库 如果没有也会链接 插入数据时才会创建这个数据库

3.db ：查看当前所属数据库

4.db.表名.insertOne({"name":"tom"}):向指定集合(表)插入数据

5.show collections :查看当前数据库的所有表

6.db.表名.find()：查询指定表中的所有数据
