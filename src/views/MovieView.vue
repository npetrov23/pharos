<template>
    <div class="wrapper">
        <main-header
        />
        <div class="content">
            <main-footer/>
        </div>
    </div>
</template>

<script>
import MainHeader from '@/components/Header/MainHeader.vue';
import MainFooter from '@/components/Footer/MainFooter.vue';

export default {
    components: {
        MainHeader,
        MainFooter
    }
}
</script>

<style scoped>
.header-fixed + .content {
    padding-top: 80px;
}
</style>