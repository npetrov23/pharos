<template>
    <div class="main-left">
        <h1 
            class="main-left__title"
            v-if="title"
        >
            {{ title }}
        </h1>
        <ul class="main-left__schedule">
            <schedule-item
                v-for="item in items"
                v-bind="item"
                :key="item.id"
                :withDate="withDate"
            />
        </ul>
    </div>
</template>

<script>
import ScheduleItem from './ScheduleItem.vue';

export default {
    name: 'text-schedule',
    props: {
        title: String,
        withDate: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        ScheduleItem
    },
    data: function() {
        return {

        }
    }
}
</script>

<style scoped>
.main-left__title {
    margin-top: 156px;
    font-size: 80px;
    font-weight: 500;
    letter-spacing: 0.05em;  
    text-transform: uppercase;
}

.main-left__schedule {
    margin-top: 90px;
}

.main-left {
  padding-left: 30px;
}
</style>