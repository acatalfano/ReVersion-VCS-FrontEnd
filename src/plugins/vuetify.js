import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.min.css'
import Theme from '../theme'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: Theme
})
