// 引入createApp用于创建应用--当花盆
import { createApp } from 'vue';
// 引入App组件 app-花的根(以后写的.vue文件都是花的叶)
import App from './App.vue';
// createApp(App)调用时将App传进去并作为根组件-把你的花放进花盆里 mount('#App')挂载在#App上-将你的花盆摆哪
createApp(App).mount('#App');