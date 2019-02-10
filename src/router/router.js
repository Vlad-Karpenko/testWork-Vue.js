import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../components/Orders'
import Products from '../components/Products'
import Main from '../components/MainPage'

Vue.use(VueRouter);


const routes = [
    {path: '/', component: Main},
    {path: '/orders', component: Orders},
    {path: '/products', component: Products}
];

export const router = new VueRouter({
    mode: 'history',
    routes
});

