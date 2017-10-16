# sell1

> sell app

## app修改日志

### 2017.07.18

+ 需求分析
+ 项目资源准备
>+ +  icon(font-icon)
>+ +  模拟数据
>+ +  组件划分
>> + stylus的应用
>> + 组件切换：vue.js+vue-route 
>> + border用:after实现
>> + 数据请求：vue-rescoure（$http.get(api)）
>> + 父级组件（app.vue）向子级组件（header.vue）传输数据
+ header组件构建
>+ + img和相邻文字有间隙，解决方法：
>> + 在父级容器设置 font-size：0
>> + 两个标签没有间隔
>> + $index 已被vue2.0摈弃，现需要在v-for=“（item,index） in itmes”中添加index索引才可以
>> + transition属性在vue2.0已经改进很多，需要/**<transition name=""></transition>**/来控制，标签里面只能存有一个大的div盒子。列表可以用/**<transition-group name=""></transition-group>**/
---
