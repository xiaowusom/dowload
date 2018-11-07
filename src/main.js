import Vue from 'vue'
import App from './App.vue'
import download from './lib/index'

Vue.prototype.$download = download;
new Vue({
  el: '#app',
  render: h => h(App)
})
