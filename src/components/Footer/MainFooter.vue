<template>
    <div class="footer">
        <div class="footer__left">
            <footer-nav
                :items="leftNavItem"
            />
            <footer-nav
                :items="rightNavItem"
            />
            <div class="footer__info">
                <span class="footer__info-item">
                    ПН–ВС 11:00–23:00
                </span>
                <span class="footer__info-item">
                    Inpharos@gmail.com
                </span>
                <span class="footer__info-item">
                    Ярославль, ул. Трефолева, 20-б (вход со двора) 150000
                </span>
            </div>
        </div>
        <div class="footer__right">
            <inline-svg class="footer__logo" :src="require('./../../assets/logo.svg')"/>
            <span class="footer__phone">+7 951 010 20 30</span>
        </div>
    </div>
</template>

<script>
import FooterNav from './FooterNav.vue';

export default {
    name: 'main-footer',
    components: {
        FooterNav
    },
    data: function() {
        return {
            leftNavItem: [
                {
                    id: 0,
                    url: '#',
                    title: 'Расписание'
                },                
                {
                    id: 1,
                    url: '#',
                    title: 'Репертуар'
                },                
                {
                    id: 2,
                    url: '#',
                    title: 'Сертификат'
                },
            ],            
            rightNavItem: [
                {
                    id: 0,
                    url: '#',
                    title: 'Школа'
                },                
                {
                    id: 1,
                    url: '#',
                    title: 'Аренда'
                },                
                {
                    id: 2,
                    url: '#',
                    title: 'Контакты'
                },
            ],
        }
    }
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-bg-dark-light);
    padding: 81px 30px;
}

.footer__left {
    display: flex;
}

.footer__info {
    display: flex;
    flex-direction: column;
}

.footer__info-item {
    /* margin-top: 20px; */
    font-weight: 500;
    font-size: 16px;
    color: #707070;
    width: 220px;
}

.footer__info-item:not(:first-child) {
    margin-top: 20px;
}
.footer__info-item:first-child {
    margin-top: 10px;
}

.footer__right {
    display: flex;
    flex-direction: column;
}

.footer__phone {
    font-weight: 700;
    font-size: 24px;
    margin-top: 50px;
}
</style>