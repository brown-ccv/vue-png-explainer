import Vue from 'vue'
import App from './App.vue'

import './../node_modules/uswds/dist/css/uswds.min.css';
import './../node_modules/uswds/dist/js/uswds.min.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
