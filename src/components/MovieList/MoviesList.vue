<template>
    <div class="schedule-block__movie">
        <div class="card-inner">
            <router-link :to="{ name: 'movie', params: {id: id+1}}">
                <div class="card-inner__top">
                    <div class="schedule-block__movie-picture">
                        <img class="schedule-block__movie-picture-item" :src="img">
                        <span class="schedule-block__movie-picture-tag">
                            {{ tag }}
                        </span>
                    </div>
                    <div class="schedule-block__movie-info">
                        <div class="info schedule-block__movie-info-date">
                            {{ date }}
                        </div>
                        <div class="info schedule-block__movie-info-title">
                            {{ title }}
                        </div>
                        <div class="info schedule-block__movie-info-description">
                            {{ description }}
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="card-inner__bottom">
                <div class="schedule-block__movie-info-footer">
                    <div class="schedule-block__movie-info-footer-price">
                        {{ formattedRublePrice }}
                    </div>
                    <base-button
                        :title="'Купить билет'"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BaseButton from './../UI/BaseButton.vue';
export default {
    name: 'movies-list',
    components: {
        BaseButton
    },
    props: {
        id: Number,
        img: String,
        tag: String,
        date: String,
        title: String,
        description: String,
        price: Number
    },
    computed: {
        countMovies: function() {
            return this.items.length;
        },
        formattedRublePrice: function() {
            return this.price + '₽';
        }
    }
}
</script>

<style scoped>
.schedule-block__movie-picture {
    position: relative;
    overflow: hidden;
    border-radius: 30px;    
}

.schedule-block__movie-picture-item {
    display: block;
    right: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 230px;
    border-radius: 30px;
    transition: all 0.5s;
    cursor: pointer;
}

.schedule-block__movie-picture-item:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.schedule-block__movie-picture-tag {
    position: absolute;
    right: 0;
    top: 0;
    background: #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 40px;
    color: #1A1A1A;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    padding: 10px 20px;
    user-select: none;
    margin: 15px;
}


.schedule-block__movie-info {
    margin-top: 25px;
}

.schedule-block__movie-info-date {
    color: var(--color-text-yellow);
    font-weight: 400;
    font-size: 14px;
}

.schedule-block__movie-info-title {
    font-weight: 500;
    font-size: 32px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.schedule-block__movie-info-description {
    font-weight: 400;
    font-size: 16px;
}

.schedule-block__movie-info .info:not(:first-child) {
    margin-top: 15px;
}

.schedule-block__movie-info-footer {
    position: relative;
    display: flex;
    align-items: center;
    /* margin-top: 56px; */
}

.schedule-block__movie-info-footer-price {
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    margin-right: 41px;
}


.card-inner {
    height: 524px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>