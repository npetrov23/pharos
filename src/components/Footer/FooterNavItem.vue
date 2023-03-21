<template>
    <li class="nav-footer__item">
        <a class="nav-footer__link" :href="url">
            {{ title }}
        </a>
    </li>
</template>

<script>
export default {
    name: 'footer-nav-item',
    props: {
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.nav-footer__link {
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.04em;
    line-height: 50px;
    text-transform: uppercase;
    color: var(--color-text);
}
</style>