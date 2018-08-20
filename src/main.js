import 'babel-polyfill'
import Vue from 'vue'
// import App from './App'
// import App from './components/table'
// import App from './components/tag'
// import App from './components/resetForm'
import App from './components/checkbox'
// import App from './components/topList'
// import App from './components/test'
import Element from 'element-ui'
import router from './router/RouterConfig'
// import 'common/css/bootstrap.css'

Vue.use(Element)
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  render: h => h(App)
})
