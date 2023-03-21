<template>
    <div class="btn-wrapper">
        <input 
            :class="btnClasses" 
            type="button"
            :value="title"
        >
    </div>
</template>

<script>
export default {
    name: 'base-button',
    props: {
        title: String,
        isBig: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        btnClasses: function() {
            return {
                'btn': true,
                'btn-small': this.isBig == false,
                'btn-big': this.isBig == true
            }
        }
    }
}
</script>

<style scoped>
.btn-wrapper:hover .btn-small.btn {
    color: var(--color-text-yellow);
    background-image: url('../../assets/ui/btnsmall-active.svg');
}

.btn-wrapper:hover .btn-big.btn {
    color: var(--color-text-yellow);
    background-image: url('../../assets/ui/btnbig-active.svg');
}

.btn {
    transition: all .2s ease-out;
    background-color: rgba(28,28,28,0);
    color: var(--color-text);
    outline: none;
    border: none;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
}

.btn-small {
    background-image: url('../../assets/ui/btnsmall.svg');
    width: 186px;
    height: 62px;
}

.btn-big {
    background-image: url('../../assets/ui/btnbig.svg');
    width: 254px;
    height: 79px;
}
</style>