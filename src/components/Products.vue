<template>
    <div class="container">
        <h2 class="content__title">Продукты</h2>
        <div v-show="getProducts.length>0" class="app__products">
            <div class="product__wrap">
                <label class="label__sortType" for="sortType">Тип:</label>
                <select v-model="selectType" class="product__sortType" id="sortType">
                    <option disabled value="">Выберите один из вариантов</option>
                    <option v-for="type in sortType" :value="type">{{type}}</option>
                </select>
                <div class="app__product" v-for="(product,i) in filterBy(getProducts,selectType)"
                     v-show="getProducts.length>0">
                    <span class="product__title">{{product.title}}</span>
                    <span class="product__type">Тип - {{product.type}}</span>
                    <div>
                        <span class="product__guarantee-start">с {{product.guarantee.start}}</span>
                        <span class="product__guarantee-end">по {{product.guarantee.end}}</span>
                    </div>
                    <div>
                        <span class="product__price"
                              v-for="money in product.price"> {{money.value}} {{money.symbol}}</span>
                    </div>
                    <span class="product__order">Приход - {{product.order}}</span>
                    <span><i v-on:click="popupDelete(product.id,$event)" class="fa fa-trash"></i></span>
                </div>
            </div>
            <div v-show="showPopup" class="order__popup">
                <div id="openModal" class="modalDialog">
                    <div>
                        <span v-on:click="showPopup=false" class="popup__close">X</span>
                        <h2 class="popup__title">Вы уверенны, что хотите удалить этот продукт?</h2>
                        <div class="removeProduct__title">{{removeProduct}}</div>
                        <div class="popup__btn">
                            <a @click.prevent href="#" v-on:click="showPopup=false"
                               class="btn btn-cancel">Отменить</a>
                            <a @click.prevent="deleteProduct" href="#" class="btn btn-remove">
                                <i class="fa fa-trash"></i>Удалить</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="app__not-found" v-show="getProducts.length<1">Товары не найдены!</div>
    </div>
</template>

<script>
    import Vue2Filters from 'vue2-filters'

    export default {
        name: "Products",
        data() {
            return {
                selectType: '',
                sortType: [],
                dateStart: [],
                dateEnd: [],
                showPopup: false,
                removeProduct: '',
                objectIndex: ''
            }
        },
        mixins: [Vue2Filters.mixin],
        computed: {
            getProducts() {
                return this.$store.getters.getProducts;
            },
        },
        methods: {
            popupDelete(productID, event) {
                this.showPopup = true;
                this.removeProduct = (event.target.closest('.app__product')).querySelector('.product__title').textContent;
                this.objectIndex = productID;
            },
            deleteProduct() {
                this.showPopup = false;
                this.$store.dispatch('deleteProduct', this.objectIndex);
            }
        },
        created() {
            let optionType = [];
            this.$store.getters.getProducts.forEach((item) => {
                optionType.push(item.type);
                let dateStart = new Date(item.guarantee.start);
                let dateEnd = new Date(item.guarantee.end);
                this.dateStart.push(`${dateStart.getDate()}/${dateStart.getMonth()}/${dateStart.getFullYear()}`);
                this.dateEnd.push(`${dateEnd.getDate()}/${dateEnd.getMonth()}/${dateEnd.getFullYear()}`);
            });
            this.sortType = [...new Set(optionType)];
        }
    }
</script>

<style scoped>
    .app__products {
        width: 100%;
    }

    .app__product {
        font-family: Bahnschrift;
        color: dimgray;
        display: flex;
        align-items: center;
        background: white;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 10px 5px;
        margin: 10px 0;
    }

    .app__product:hover {
        cursor: pointer;
        box-shadow: 0 5px 10px gray;
    }

    .label__sortType {
        font: 14px Bahnschrift;
        color: dimgray;
    }

    .product__sortType {
        margin-bottom: 50px;
        font: 14px Bahnschrift;
        outline: none;
        padding: 5px;
        border-radius: 5px;
        margin-left: 20px;
    }

    .app__product > * {
        width: 100%;
        text-align: center;
    }

    .product__guarantee-start,
    .product__guarantee-start,
    .product__price {
        display: block;
    }
</style>