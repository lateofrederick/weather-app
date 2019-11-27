import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weather-page',
      component: require('@/components/WeatherPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
