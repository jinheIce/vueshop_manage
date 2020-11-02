import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//导入全局样式
import './assets/css/global.css'

//配置axios
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:44370/api/"

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')