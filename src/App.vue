<template>
    <div id="app">
        <top-menu></top-menu>
        <div class="app__menu">
            <navigation-menu></navigation-menu>
            <transition name="custom-classes-transition"
                        enter-active-class="animated bounceInLeft"
                        leave-active-class="animated bounceOutRight">
                <router-view class="app__content"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import NavigationMenu from './components/NavigationMenu'
    import TopMenu from './components/TopMenu'

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            NavigationMenu, TopMenu
        }
    }
</script>

<style>
    #app {
        overflow-x: hidden;
        background: lightcyan;
        height: 100vh;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .row {
        display: flex;
    }

    .app__menu {
        display: flex;
        height: calc(100% - 120px);
        align-items: center;
    }

    .app__content {
        width: 100%;
        padding: 0 20px;
    }

    .content__title {
        font: 26px Bahnschrift;
        margin-bottom: 40px;
    }

    .bounceInLeft {
        animation-delay: .8s;
    }

    .product__wrap .fa-trash:hover,
    .orders__wrap .fa-trash:hover {
        color: black;
    }

    .modalDialog {
        position: fixed;
        font-family: Bahnschrift;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 99999;
        -webkit-transition: opacity 400ms ease-in;
        -moz-transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
    }

    .modalDialog > div {
        width: 500px;
        position: relative;
        margin: 10% auto;
        border-radius: 5px;
        background: #fff;
    }

    .popup__close {
        position: absolute;
        right: -12px;
        top: -10px;
        background: white;
        padding: 5px 8px;
        border: 1px solid lightgray;
        border-radius: 50%;
        cursor: pointer;
    }

    .popup__close:hover {
        background: lightgray;
    }

    .popup__title {
        font-size: 18px;
        margin-bottom: 20px;
        padding: 20px 20px 10px;
    }

    .removeProduct__title {
        border-top: 1px solid lightgray;
        padding: 10px 20px;
    }

    .popup__btn {
        background: lawngreen;
        padding: 30px 10px;
        text-align: right;

    }

    .popup__btn .btn {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 12px;
        margin: 0 20px;
    }

    .btn-cancel {
        color: white;
        transition: .2s;
    }

    .btn-cancel:hover {
        color: red;
    }

    .btn-remove {
        color: red;
        background: white;
        padding: 10px 20px;
        border-radius: 20px;
        transition: .2s;
    }

    .btn-remove:hover {
        background: red;
        color: white;
    }

    .btn-remove .fa-trash {
        margin-right: 5px;
    }

    .app__not-found {
        font: 18px Bahnschrift;
    }

</style>
