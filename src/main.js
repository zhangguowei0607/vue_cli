import Vue from 'vue'
// const Vue = require('vue')
import App from './App.vue'
// const App = require('./App.vue')
import './registerServiceWorker'
// require('./registerServiceWorker')
import router from './router'
// const router = require('./router')
import store from './store'
// const store = require('./store')

// Vue的项目配置 环境标识 -- 生产环境 - false
// 项目上线时将此值改为true
Vue.config.productionTip = false

// new Vue实例
// ？ 怎么没有el选项 new Vue().$mount('#app')
// ？ 怎么没有components注册组件 render: h => h(App)
// 用App.vue的模板替换了index.html 中的 <div id="app"></div>
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
