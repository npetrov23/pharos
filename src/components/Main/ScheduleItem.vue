<template>
    <div class="main-left__schedule-item">
        <a 
            :class="{'main-left__schedule-item-link': true, 'main-left__schedule-item-link--with-date': withDate}" 
            :href="url"
        >
            <span class="main-left__schedule-item-link-time">
                {{ time }}
            </span>
            <span class="main-left__schedule-item-link-title">
                {{ title }}
            </span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'schedule-item',
    props: {
        time: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        withDate: Boolean
    }
}
</script>

<style scoped>
.main-left__schedule-item {
    padding-bottom: 25px;
}

.main-left__schedule-item:not(:last-child) {
    margin-bottom: 25px;
}

.main-left__schedule-item-link--with-date {
    display: flex;
    flex-direction: column
}
.main-left__schedule-item-link-time,
.main-left__schedule-item-link-title {
  font-size: 24px;
}

.main-left__schedule-item-link-time {
    font-weight: 700;
    margin-right: 30px;
}

.main-left__schedule-item-link-title {
    font-weight: 400;
}

.main-left__schedule-item:not(:last-child) {
    cursor: pointer;
    border-bottom: 1px solid #FFFFFF;
}

.main-left__schedule-item .main-left__schedule-item-link-time,
.main-left__schedule-item .main-left__schedule-item-link-title{
    
    transition: all .5s ease-out;
}
.main-left__schedule-item:hover .main-left__schedule-item-link-time,
.main-left__schedule-item:hover .main-left__schedule-item-link-title {
    
    color: var(--color-text-yellow);
}

</style>