<template>
    <header :class="classesHeader">
        <header-nav
            :items="leftMenuItem"
        ></header-nav>
        <router-link to="/">
            <div class="header__logo">
                <inline-svg
                    :src="require('./../../assets/logo.svg')"
                />
            </div>
        </router-link>
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
    props: {
        isFixed: {
            type: Boolean,
            default: true
        }
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
    },
    computed: {
        classesHeader: function(){ 
            return {
                'header': true,
                'header-absolute': this.isFixed == false,
                'header-fixed': this.isFixed == true
            }
        }
    }
}
</script>
    
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    padding: 10px 30px;
}

.header-absolute {
    position: absolute;
}

.header-fixed {
    position: fixed;
    background-color: var(--color-bg-red);
}

.header-absolute,
.header-fixed {
    left: 0;
    right: 0;
    margin-bottom: 150px;
}
</style>