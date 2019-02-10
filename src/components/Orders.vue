<template>
    <div class="container">
        <h2 class="content__title">Приходы</h2>
        <div v-show="getOrders.length>0" class="app__orders">
            <div class="orders__wrap">
                <div v-on:click="detailsOrder(order.id,$event)" class="app__order" v-for="(order,i) in getOrders"
                     v-show="getOrders.length>0">
                    <span v-show="!showDetails" class="order__title">{{order.title}}</span>
                    <div class="order__productCount">
                        <i class="fa fa-bars"></i>
                        <div>
                            <span>{{order.counter}}</span>
                            <span>Продуктов</span>
                        </div>
                    </div>
                    <span>{{order.date}}</span>
                    <span><i v-on:click.stop="popupDelete(order.id,$event)" v-show="!showDetails"
                             class="fa fa-trash"></i></span>
                    <span v-show="showDetails" class="selectOrder"><i class="fa fa-angle-right"></i></span>
                </div>
            </div>
            <div v-show="showPopup" class="order__popup">
                <div id="openModal" class="modalDialog">
                    <div>
                        <span v-on:click="showPopup=false" class="popup__close">X</span>
                        <h2 class="popup__title">Вы уверенны, что хотите удалить этот приход?</h2>
                        <div class="removeProduct__title">{{removeOrder}}</div>
                        <div class="popup__btn">
                            <a @click.prevent href="#" v-on:click="showPopup=false"
                               class="btn btn-cancel">Отменить</a>
                            <a @click.prevent="deleteOrder" href="#" class="btn btn-remove">
                                <i class="fa fa-trash"></i>Удалить</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order__detail" v-show="showDetails">
                <span class="close__order-details" v-on:click="showDetails=false">X</span>
                <h3 class="details__title">{{selectOrder}}</h3>
                <span class="add__product"><i class="fa fa-plus-circle"></i> Добавить продукт</span>
                <div class="product__list">
                    <div class="detail-of-product" v-for="(product,index) in detail_of_product">
                        <span>{{index+1}}) {{product.title}}</span>
                        <span>{{product.type}}</span>
                        <span>{{product.specification}}</span>
                        <div class="product__price">
                            <span v-for="money in product.price"> {{money.value}} {{money.symbol}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="app__not-found" v-show="getOrders.length<1">Приходы не найдены!</div>
    </div>
</template>

<script>
    export default {
        name: "Orders",
        data() {
            return {
                productCount: 0,
                showDetails: false,
                showPopup: false,
                selectOrder: '',
                detail_of_product: [],
                removeOrder: '',
                objectIndex: ''
            }
        },
        computed: {
            getOrders() {
                return this.$store.getters.getOrders;
            }
        },
        methods: {
            detailsOrder(orderID, event) {
                this.showDetails = true;
                let selectOrder = document.querySelectorAll('.selectOrder');
                for (let i = 0; i < selectOrder.length; i++) {
                    selectOrder[i].classList.remove('activeOrder');
                }
                (event.target.closest('.app__order')).querySelector('.selectOrder').classList.add('activeOrder');
                this.selectOrder = (event.target.closest('.app__order')).querySelector('.order__title').textContent;
                this.detail_of_product = [];
                this.$store.getters.getProducts.forEach((product) => {
                    if (product.order === orderID) {
                        this.detail_of_product.push(product)
                    }
                });
            },
            popupDelete(orderID, event) {
                this.showPopup = true;
                this.removeOrder = (event.target.closest('.app__order')).querySelector('.order__title').textContent;
                this.objectIndex = orderID;
            },
            deleteOrder() {
                this.showPopup = false;
                this.$store.dispatch('deleteOrder', this.objectIndex);
            }
        },
        created() {
            if (this.$store.getters.getOrders.length > 0) {
                if (!this.$store.getters.getOrders[0].hasOwnProperty('counter')) {
                    this.$store.getters.getProducts.forEach((product) => {
                            this.$store.getters.getOrders.forEach((order) => {
                                if (order.id === product.order) {
                                    if ('counter' in order) {
                                        order.counter++;
                                    } else {
                                        order.counter = 1
                                    }
                                }
                            });
                        }
                    );
                }
            }
        }
    }
</script>

<style scoped>
    .app__orders {
        width: 100%;
        display: flex;
    }

    .orders__wrap {
        width: 100%;
    }

    .app__order {
        font-family: Bahnschrift;
        color: dimgray;
        display: flex;
        align-items: center;
        background: white;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 10px 5px;
        margin: 10px 0;
        position: relative;
    }

    .app__order:hover {
        cursor: pointer;
        box-shadow: 0 5px 10px gray;
    }

    .app__order > * {
        width: 100%;
        text-align: center;
    }

    .order__productCount {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .order__productCount span {
        display: block;
    }

    .fa-bars {
        font-size: 18px;
        border: 1px solid lightgray;
        border-radius: 50%;
        padding: 5px 6px;
        margin-right: 10px;
    }

    .order__detail {
        width: 100%;
        background: white;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 10px;
        margin: 10px;
        position: relative;
        font-family: Bahnschrift;
    }

    .close__order-details {
        position: absolute;
        right: -10px;
        top: -10px;
        background: white;
        cursor: pointer;
        border: 1px solid gray;
        border-radius: 50%;
        padding: 3px 6px;
    }

    .close__order-details:hover {
        background: lightgray;
        color: black;
    }

    .details__title {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .add__product {
        font-size: 14px;
        color: green;
        cursor: pointer;
    }

    .product__list {
        border-top: 1px solid lightgray;
        margin-top: 10px;
    }

    .selectOrder {
        color: white;
        background: lightgray;
        width: 30px;
        padding: 10px 0;
        display: none;
        position: absolute;
        right: 0;
        font-size: 20px;
    }

    .activeOrder {
        display: block;
    }

    .detail-of-product {
        margin-top: 10px;
        display: flex;
        align-items: center;
    }

    .detail-of-product > * {
        width: 100%;
    }

    .product__price > span {
        display: block;
    }
</style>