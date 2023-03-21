<template>
    <header class="header">
        <header-nav
            :items="leftMenuItem"
        ></header-nav>
        <div class="header__logo">
            <inline-svg
                :src="require('./../../assets/logo.svg')"
            />
        </div>
        <header-nav
            :items="rightMenuItem"
        ></header-nav>
    </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue';

export default {
    name: 'main-header',
    components: {
        HeaderNav
    },
    data: function() {
        return {
            leftMenuItem: [
                {
                    id: 0,
                    title: 'Расписание',
                    url: '#'
                },
                {
                    id: 1,
                    title: 'Репертуар',
                    url: '#'
                },
                {
                    id: 2,
                    title: 'Сертификат',
                    url: '#'
                },
            ],
            rightMenuItem: [
                {
                    id: 0,
                    title: 'Школа',
                    url: '#'
                },
                {
                    id: 1,
                    title: 'Аренда',
                    url: '#'
                },
                {
                    id: 2,
                    title: 'Контакты',
                    url: '#'
                },
                {
                    id: 3,
                    title: 'Мои билеты',
                    url: '#'
                },
            ],
        }
    }
}
</script>
    
<style scoped>
.header {
    display: flex;
}

.header {
    position: absolute;
    left: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    padding: 10px 30px;
}
</style>