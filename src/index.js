import Vue from 'vue'
import { plugin } from 'vue-function-api'

Vue.use(plugin)

import App from './App'

var vm = new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App,
  },
})
