<template>
    <div class="main-right">
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img
                    :src="items[Math.abs(currentIndex) % maxSlides].img"
                    class="main-right__img"
                >
            </div>
        </transition-group>
        <slider-pagination
            :slides="maxSlides"
            :currentSlide="currentIndex"
        />
        <div class="main-right__slider-info">
            <h1 class="main-right__slider-info__title">{{ currentSlide.title }}</h1>
            <span class="main-right__slider-info__description">{{ currentSlide.description }}</span>
        </div>
    </div>
</template>

<script>
import SliderPagination from './SliderPagination.vue';

export default {
    name: 'main-slider',
    components: {
        SliderPagination
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            currentIndex: 0,
        }
    },
    mounted: function() {
        this.start();
    },
    computed: {
        currentSlide: function() {
            return this.items[this.currentIndex];
        },
        maxSlides: function() {
            return this.items.length;
        },
    },
    watch: {
        currentSlide: function() {
            if(this.currentIndex > this.maxSlides-1) {
                this.currentIndex = 0;
            }
            if(this.currentIndex < 0) {
                this.currentIndex = this.maxSlides;
            }
        }
    },
    methods: {
        start: function() {
            setInterval(function() {
                this.currentIndex += 1;
            }.bind(this), 5000);
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
    transition: opacity 5s;
    opacity: 0;
}
.main-right {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* justify-content: space-around; */
  align-items: flex-end;
  padding-right: 30px;
}

.main-right__img {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.main-right__slider-info {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 145px;
    margin-top: 132px;
    user-select: none;
    /* width: 500px;
    text-align: right; */
}

.main-right__slider-info__title {
    font-size: 50px;
    font-weight: 500;
    text-transform: uppercase;
    /* word-break: break-word; */
}

.main-right__slider-info__description {
    font-size: 24px;
    font-weight: 400;
}
</style>