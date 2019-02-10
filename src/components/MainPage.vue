<template>
    <div class="container">
        <div class="app__main">
            <h3 class="main__title">Выберите нужный Вам раздел в меню</h3>
            <div class="arrow"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPage"
    }
</script>

<style scoped>
    .main__title {
        font: 26px Bahnschrift;
    }

    .arrow {
        width: 90px;
        height: 30px;
        border: 10px solid rgba(12, 18, 22, 0.91);
        border-right-color: transparent;
        border-radius: 10px;
        position: relative;
        left: 445px;
        top: -22px;
        transform: rotate(180deg);
    }

    .arrow:after {
        content: "";
        display: block;
        position: absolute;
        border: 13px solid transparent;
        top: -12px;
        left: 80px;
        transform: rotate(90deg);
        border-bottom-color: rgba(12, 18, 22,1);
        border-top: 0;
    }
</style>