<template>
    <nav class="nav-footer">
        <ul class="nav-footer__list">
            <footer-nav-item
                v-for="item in items"
                :key="item.id"
                :title="item.title"
                :url="item.url"
            />
        </ul>
    </nav>    
</template>

<script>
import FooterNavItem from './FooterNavItem.vue';

export default {
    name: 'footer-nav',
    components: {
        FooterNavItem
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
.nav-footer:not(:last-child) {
    margin-right: 62px;
}
</style>