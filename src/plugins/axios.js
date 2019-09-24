import Vue from 'vue'

// Lib imports
import axios from 'axios'

axios.defaults.baseURL = ''
//Cookies.getJSON('logedinUser') ? axios.defaults.headers.common['authorization'] = `Bearer ${Cookies.getJSON('logedinUser').token}` : ''
window.axios = axios

Vue.prototype.$http = axios
