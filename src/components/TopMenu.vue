<template>
    <div class="app__topMenu">
        <div class="container">
            <div class="row">
                <div class="topMenu__logo">
                    <a href="/"><img class="logo__img" src="../assets/logo.png"/></a>
                </div>
                <div class="topMenu__field">
                    <label><input class="topMenu__input" type="text" placeholder="Поиск"/></label>
                </div>
                <div class="topMenu__date-time">
                    <div>
                        <span class="date-time__day">{{time.day}}</span>
                        <span class="date-time__date">{{time.date}}</span>
                        <span class="date-time__month">{{time.month}}</span>
                        <span class="date-time__year">{{time.year}}</span>
                        <span class="date-time__hg-mm"><i class="fa fa-clock-o date-time__icon"></i> {{time.hh}}:{{time.mm}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopMenu",
        data() {
            return {
                day: ["Воскресенье", "Понедельник", "Вторник",
                    "Среда", "Четверг", "Пятница", "Суббота"
                ],
                month: ["Янв.", "Февр.", "Марта", "Апр.", "Мая", "Июня",
                    "Июля", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."
                ],
                time: ''
            }
        },
        methods: {
            addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
        },
        created: function () {
            setInterval(() => {
                let date = new Date();
                this.time = {
                    day: this.day[date.getDay()],
                    date: date.getDate(),
                    month: this.month[date.getMonth()],
                    year: date.getFullYear(),
                    hh: this.addZero(date.getHours()),
                    mm: this.addZero(date.getMinutes())
                }
            })
        },
    }
</script>

<style scoped>
    .app__topMenu {
        padding: 20px;
        background: white;
        box-shadow: 0 0 10px gray;
        position: relative;
    }

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .topMenu__logo {
        width: 80px;
        height: 80px;
    }

    .topMenu__logo a {
        display: block;
    }

    .topMenu__input {
        width: 250px;
        padding: 5px 10px;
        border: 1px solid transparent;
        background: rgba(209, 194, 210, 0.54);
        border-radius: 10px;
        outline: none;
        font: 14px "Arial Black";
        color: black;
        box-shadow: 0 5px 10px lightgray;
    }

    .topMenu__input:focus {
        border: 3px solid lightblue;
    }

    .logo__img {
        width: 100%;
    }

    .topMenu__date-time {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        font: 14px Bahnschrift;
    }

    .date-time__day {
        display: block;
        margin-bottom: 10px;
    }

    .date-time__icon {
        color: greenyellow;
        margin-right: 5px;
    }

    .date-time__hg-mm {
        margin-left: 10px;
    }
</style>