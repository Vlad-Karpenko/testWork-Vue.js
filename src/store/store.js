import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        orders: [
            {
                id: 1,
                title: 'Order 1',
                date: '2017-06-29 12:09:33',
                description: 'desc',
            },
            {
                id: 2,
                title: 'Order 2',
                date: '2017-06-29 12:09:33',
                description: 'desc',
            },
            {
                id: 3,
                title: 'Order 3',
                date: '2017-06-29 12:09:33',
                description: 'desc',
            }
        ],

        products: [
            {
                id: 1,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 1',
                type: 'Monitors',
                specification: 'Specification 1',
                guarantee: {
                    start: '2017-06-29 12:09:33',
                    end: '2017-06-29 12:09:33'
                },
                price: [
                    {value: 100, symbol: 'USD', isDefault: 0},
                    {value: 2600, symbol: 'UAH', isDefault: 1}
                ],
                order: 1,
                date: '2017-06-29 12:09:33'
            },
            {
                id: 2,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 2',
                type: 'Monitors',
                specification: 'Specification 1',
                guarantee: {
                    start: '2018-06-29 12:09:33',
                    end: '2018-06-29 12:09:33'
                },
                price: [
                    {value: 100, symbol: 'USD', isDefault: 0},
                    {value: 2600, symbol: 'UAH', isDefault: 1}
                ],
                order: 2,
                date: '2017-06-29 12:09:33'
            },
            {
                id: 3,
                serialNumber: 1234,
                isNew: 1,
                photo: 'pathToFile.jpg',
                title: 'Product 3',
                type: 'Headphones',
                specification: 'Specification 1',
                guarantee: {
                    start: '2019-06-29 12:09:33',
                    end: '2019-06-29 12:09:33'
                },
                price: [
                    {value: 100, symbol: 'USD', isDefault: 0},
                    {value: 2600, symbol: 'UAH', isDefault: 1}
                ],
                order: 2,
                date: '2017-06-29 12:09:33'
            },
        ]
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getOrders(state) {
            return state.orders
        }
    },
    actions: {
        deleteOrder(context, i) {
            context.commit('deleteOrder', i);
        },
        deleteProduct(context, i) {
            context.commit('deleteProduct', i);
        },
    },
    mutations: {
        deleteOrder(state, i) {
            state.orders.forEach((order) => {
                if (order.id === i) {
                    let index = state.orders.indexOf(order);
                    state.orders.splice(index, 1)
                }
            });
        },
        deleteProduct(state, i) {
            state.products.forEach((product) => {
                if (product.id === i) {
                    let index = state.products.indexOf(product);
                    state.products.splice(index, 1)
                }
            });
        },
    }
})