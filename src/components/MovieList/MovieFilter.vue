<template>
    <div class="schedule-block__filter">
        <h1 class="schedule-block__filter-title">Расписание</h1>
        <div class="schedule-block__filter-list">
            <div class="one-item schedule-block__filter-list-item">3.10 (Пн)</div>
            <div class="one-item schedule-block__filter-list-item">4.10 (Вт)</div>
            <div class="one-item schedule-block__filter-list-item">5.10 (Ср)</div>
            <div class="one-item schedule-block__filter-list-item">6.10 (Чт)</div>
            <div class="one-item schedule-block__filter-list-item">7.10 (Пт)</div>
            <div class="one-item schedule-block__filter-list-item">8.10 (Сб)</div>
            <div class="one-item schedule-block__filter-list-item">9.10 (Вс)</div>
            <div class="all-item schedule-block__filter-list-item">Все</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie-filter'
}
</script>

<style scoped>
.schedule-block__filter-title {
    font-size: 50px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.schedule-block__filter-list {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(3, 128px);
    gap: 15px;
}

.schedule-block__filter-list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFFFFF;
    border-radius: 42px;
    height: 51px;
    transition: all .5s ease-out;
}

.schedule-block__filter-list-item:hover {
    border-color: var(--color-text-yellow);
    color: var(--color-text-yellow);
    
    cursor: pointer;
}

.all-item.schedule-block__filter-list-item {
    grid-column: span 2;
}
</style>