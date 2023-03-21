<template>
    <div class="wrapper">
    <main-header
        :isFixed="false"
    />
        <div class="main-block">
            <text-schedule
                title="Сегодня" 
                :items="mainSchedule"
            />
            <main-slider
                :items="mainSliderItems"
            />
        </div>
        <div class="schedule-block">
            <movie-filter/>
            <template 
                v-for="item in moviesList"
            >
                <movies-list 
                    v-bind="item"
                    :key="item.id"
                />
            </template>
        </div>
        <div class="events-block">
            <div class="events-block__left">
                <h1 class="events-block__title">
                    <span class='test'>Каждую неделю у нас проходят встречи, лекции, фестивали</span>
                </h1>
            </div>
            <div class="events-block__right">
                <text-schedule
                    class="events-block__schedule"
                    :withDate="true"
                    :items="eventsSchedule"
                />
            </div>
        </div>
        <div class="reservation-block">
            <div class="reservation-block__inner">
                <div class="reservation-block__title">
                    Аренда кинозала в <inline-svg style="margin-left: 25px;" :src="require('@/assets/pharos.svg')" />
                </div>
                <div class="reservation-block__description">
                    У нас вы можете посмотреть любимые фильмы на большом экране, устроить кинофестиваль или провести встречу киноклуба.
                </div>
                <base-button
                    class="reservation-block__btn"
                    :title="'Забронировать'"
                    :isBig="true"
                />
            </div>
        </div>
    <main-footer/>
    </div>
</template>

<script>
import MainHeader from '@/components/Header/MainHeader.vue';
import TextSchedule from '@/components/Main/TextSchedule.vue';
import MainSlider from '@/components/Slider/MainSlider.vue';
import MovieFilter from '@/components/MovieList/MovieFilter.vue';
import MoviesList from '@/components/MovieList/MoviesList.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import MainFooter from '@/components/Footer/MainFooter.vue';

export default {
    components: {
        MainHeader,
        TextSchedule,
        MainSlider,
        MovieFilter,
        MoviesList,
        BaseButton,
        MainFooter
    },
    data: function() {
        return {
            mainSliderItems: [
                {
                    id: 0,
                    img: require('@/assets/posters/twenpeaks.png'),
                    title: 'Твин пикс',
                    description: 'В кино с 20 октября',
                    loaded: true,
                },
                {
                    id: 1,
                    img: require('@/assets/posters/endworld.png'),
                    title: 'Это всего лишь конец света',
                    description: 'В кино с 20 октября',
                    loaded: false
                },
                {
                    id: 2,
                    img: require('@/assets/posters/coffee.png'),
                    title: 'Кофе и сигареты',
                    description: 'В кино с 20 октября',
                    loaded: false
                },
                {
                    id: 3,
                    img: require('@/assets/posters/woman.png'),
                    title: 'Женщины на грани',
                    description: 'В кино с 20 октября',
                    loaded: false
                },
                {
                    id: 4,
                    img: require('@/assets/posters/sleep.png'),
                    title: 'Наука сна',
                    description: 'В кино с 20 октября',
                    loaded: false
                },
            ],
            moviesList: [
                {
                    id: 0,
                    img: require('@/assets/movies/preview.png'),
                    tag: 'Культовое',
                    date: '6 октября, 17:00',
                    title: 'Ускользающая красота',
                    description: 'Прекрасная юная американка после самоубийства матери, известной поэтессы и топ-модели, отправляется в Италию.',
                    price: 480
                },
                {
                    id: 1,
                    img: require('@/assets/movies/polnayaluna.png'),
                    tag: 'Визуальное',
                    date: '6 октября, 19:00',
                    title: 'Королевство полной луны',
                    description: 'Детская любовь и походная романтика в трагикомедии Уэса Андерсона  про бунтующих бойсткаутов.',
                    price: 450
                },
                {
                    id: 2,
                    img: require('@/assets/movies/kurier.png'),
                    tag: 'Меланхоличное',
                    date: '6 октября, 20:00',
                    title: 'Курьер',
                    description: 'Иван разносит газеты и спорит со взрослыми о жизни. Грустная комедия Карена Шахназарова, лидер проката в СССР.',
                    price: 400
                },
                {
                    id: 3,
                    img: require('@/assets/movies/middle.png'),
                    tag: 'Ностальгическое',
                    date: '7 октября, 12:30',
                    title: 'Середина 90-х',
                    description: 'Подросток ищет признания в компании уличных скейтбордистов. Ностальгический режиссерский дебют Джоны Хилла.',
                    price: 450
                },
                {
                    id: 4,
                    img: require('@/assets/movies/fire.png'),
                    tag: 'Лекция',
                    date: '7 октября, 14:45',
                    title: '“Огонь иди за мной”',
                    description: 'Лекция посвящена главным лейтмотивам Линча и, конечно, загадочному, обаятельному и трагическому проекту «Твин Пикс.',
                    price: 500
                },                
                {
                    id: 5,
                    img: require('@/assets/movies/ledi.png'),
                    tag: 'Хичкок',
                    date: '7 октября, 17:45',
                    title: 'Леди исчезает',
                    description: 'Пассажиры поезда Тироль - Лондон оказываются втянуты в шпионскую интригу с пропажей людей.',
                    price: 400
                },
                {
                    id: 6,
                    img: require('@/assets/movies/mirror.png'),
                    tag: 'Шедевр',
                    date: '7 октября, 20:30',
                    title: 'Зеркало',
                    description: 'Самобытная автобиография главного режиссера Советского Союза, рассказанная посредством киноязыка.',
                    price: 550
                },                
                {
                    id: 7,
                    img: require('@/assets/movies/head.png'),
                    tag: 'Культовое',
                    date: '7 октября, 22:45',
                    title: 'Голова-Ластик',
                    description: 'Полнометражный дебют Дэвида Линча о страхе отцовства и тонкостях воспитания ребенка-мутанта.',
                    price: 430
                },
            ],
            mainSchedule: [
                {
                    id: 0,
                    time: '12:30',
                    title: 'Экстаз',
                    url: '#'
                },
                {
                    id: 1,
                    time: '15:00',
                    title: 'Кофе и сигареты',
                    url: '#'
                },
                {
                    id: 2,
                    time: '17:00',
                    title: 'На последнем дыхании',
                    url: '#'
                },
                {
                    id: 3,
                    time: '20:00',
                    title: 'Королевство полной луны',
                    url: '#'
                },
            ],            
            eventsSchedule: [
                {
                    id: 0,
                    time: '10 октября 19:30',
                    title: 'Большой фестиваль мультфильмов',
                    url: '#'
                },
                {
                    id: 1,
                    time: '21 октября 17:30',
                    title: 'Жизнь и творчество Поля Гогена',
                    url: '#'
                },
                {
                    id: 2,
                    time: '27 октября 13:30',
                    title: 'Лекция “Огонь иди за мной”',
                    url: '#'
                },
            ],
        }
    },
    computed: {
        countMovies: function() {
            return this.moviesList.length;
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');

.wrapper {
    background-color: var(--color-bg-red);
    position: relative;
}

.main-block {
    display: grid;
    grid-template-columns: 33% 67%;
    grid-template-rows: 800px;
}

.schedule-block {
    display: grid;
    grid-template-columns: repeat(3, minmax(205px, 1fr));
    /* grid-template-rows: repeat(4, 440px); */
    background-color: var(--color-bg-dark);
    color: var(--color-text);
    padding: 50px 30px; 
    gap: 100px 30px;
}

.events-block {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
    background-color: var(--color-bg-dark);
    padding: 260px 30px 115px 30px; 
}

.events-block__top {
    
}

.events-block__title {
    width: 520px;
    font-weight: 500;
    font-size: 50px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.events-block__schedule {
    width: 500px;
}

.reservation-block {
    background-color: var(--color-bg-dark);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/bg.png') no-repeat;
    height: 625px;
    background-size: 100%;
}

.reservation-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.reservation-block__title,
.reservation-block__description {
    color: var(--color-text);
    text-align: center;
}

.reservation-block__title {
    font-weight: 500;
    font-size: 50px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.reservation-block__description {
    font-weight: 400;
    font-size: 16px;
    width: 569px;
}

.reservation-block__btn {
    margin-top: 62px;
}

.reservation-block__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>