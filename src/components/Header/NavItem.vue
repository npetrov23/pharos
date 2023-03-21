<template>
    <li class="menu__list-item">
        <a class="menu__list-item-link" :href="url">
            {{ title }}
        </a>
    </li>
</template>

<script>
export default {
    name: 'nav-item',
    props: {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.menu__list-item:not(:last-child) {
    margin-right: 30px;
}

.menu__list-item-link {
    font-size: 18px;
    font-weight: 400;
    transition: all .2s ease-out;
}

.menu__list-item-link:hover {
    color: var(--color-text-yellow);
}
</style>