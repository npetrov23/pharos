<template>
    <div class="main-right__pagination">
        <div 
            v-for="(slide, index) in slides"
            :key="index"
            :class="{'main-right__pagination-dot': true, 'active': index === currentSlide}"
        >
        </div>
    </div>
</template>

<script>
export default {
    name: 'slider-pagination',
    props: {
        slides: {
            type: Number,
            required: true
        },
        currentSlide: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.main-right__pagination {
    position: relative;
    z-index: 2;
}

.main-right__pagination-dot {
    width: 10px;
    height: 10px;
    border: 1px solid #FFFFFF;
    transform: rotate(-90deg);
    border-radius: 50%;
}

.main-right__pagination-dot.active {
    background: #FFFFFF;
}

.main-right__pagination-dot:not(:first-child) {
    margin-top: 10px;
}
</style>