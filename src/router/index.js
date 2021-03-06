import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    }, 
    {
      path: '/item',
      name: 'Item',
      component: Item
    }
  ]
})
