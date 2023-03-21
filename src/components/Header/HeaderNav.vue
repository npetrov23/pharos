<template>
    <nav class="menu">
        <ul class="menu__list">
            <nav-item
                v-for="item in items"
                :key="item.id"
                :title="item.title"
                :url="item.url"
            />
        </ul>
    </nav>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
    name: 'header-nav',
    components: {
        NavItem
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.menu__list {
    display: flex;
}
</style>