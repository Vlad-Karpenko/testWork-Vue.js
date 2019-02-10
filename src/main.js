import './static/reset.css'
import 'animate.css'
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import {router} from './router/router'
import io from 'socket.io-client';

const SocketInstance = io.connect('http://localhost:8080');
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketInstance
}));

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
