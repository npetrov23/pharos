<template>
    <div class="schedule-block__movie-picture">
        <img class="schedule-block__movie-picture-item" src="./assets/movies/preview.png">
        <span class="schedule-block__movie-picture-tag">
            Культовое
        </span>
    </div>
    <div class="schedule-block__movie-info">
        <div class="info schedule-block__movie-info-date">
            6 октября, 17:00
        </div>
        <div class="info schedule-block__movie-info-title">
            Ускользающая красота
        </div>
        <div class="info schedule-block__movie-info-description">
            Прекрасная юная американка после самоубийства матери, известной поэтессы и топ-модели, отправляется в Италию.
        </div>
    </div>
    <div class="info schedule-block__movie-info-footer">
        <div class="schedule-block__movie-info-footer-price">
            480 ₽
        </div>
        <div class="schedule-block__movie-info-footer-btn">
            <inline-svg
                class="btn"
                :src="require('./assets/ui/btnsmall.svg')"
            />
            <span class="btn-text">Купить билет</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>