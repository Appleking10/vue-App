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
>+ + $index 已被vue2.0摈弃，现需要在v-for=“（item,index） in itmes”中添加index索引才可以
>+ + transition属性在vue2.0已经改进很多，需要/**<transition name=""></transition>**/来控制，标签里面只能存有一个大的div盒子。列表可以用/**<transition-group name=""></transition-group>**/
+ goods组件构建
>+ + 左右两边用flex布局，右边可以随着容器的拉伸而伸缩
>+ + 各组件的css样式干扰解决方法/**<style scoped></style>**/添加scoped值就好
>+ + 使用better-scroll插件要实现屏幕滚动的效果
>+ + 左右两边同时滚动的实现要点：
>> + 要计算右边列表每一个<li>的高度，push到存储数组
>> + 利用vue的on监听屏幕滚动的距离，然后给返回给监听变量
>> + 利用vue的计算属性来计算屏幕滚动哪一个<li>，并返回index，在判定当左边菜单的index和返回的index相等时，addClass
>> + 配置better-scroll
>> + 在菜单<li>中添加click事件，传入index和$event，使用better-scroll的scrollToElement接口去实行跳转
---
+ shopcard+cartcontrol组件的构建
>+ + 价格计算基于foodselect[]
