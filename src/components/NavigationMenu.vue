<template>
    <nav class="app__nav">
        <div class="nav__wrap">
            <div class="app__user-settings">
                <div class="app__user">
                    <img src="../assets/logo.png"/>
                </div>
            </div>
            <div class="app__item">
                <router-link to="/" class="nav__link">Главная</router-link>
                <router-link to="/orders" class="nav__link">Приход</router-link>
                <router-link to="/products" class="nav__link">Продукты</router-link>
                <router-link to="/user" class="nav__link">Пользователи</router-link>
                <router-link to="/settings" class="nav__link">Настройки</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavigationMenu",
        data() {
            return {
                isActive: false
            }
        }
    }
</script>

<style scoped>
    .app__nav {
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        box-shadow: 0 0 10px gray;
    }

    .nav__wrap {
        padding: 0 30px;
    }

    .app__user-settings {
        width: 50px;
        height: 50px;
        margin: 0 auto 50px;
    }

    .app__user-settings img {
        width: 100%;
    }

    .nav__link {
        display: block;
        text-decoration: none;
        text-align: center;
        margin: 10px 0;
        font: 16px Bahnschrift;
        color: black;
        border-bottom: 2px solid transparent;
    }

    .nav__link:hover {
        border-bottom: 2px solid greenyellow;
    }

    .router-link-exact-active {
        border-bottom: 2px solid greenyellow;
    }
</style>