<template>
    <button @click="$emit('click')" class="vn-bk-cl-action vn-cl-white vn-button"
            @mouseenter="hover = true" @mouseleave="hover = false" :class="style">
        <slot>{{label}}</slot>
    </button>
</template>

<script>
    export default {
        name: "VnButton",
        props: {
            label: String
        },
        data() {
            return {
                hover: false
            }
        },
        computed: {
            style() {
                return {
                    'vn-bk-cl-hover': this.hover
                }
            }
        }
    }
</script>

<style scoped>
    @import "../styles/styles.module.css";

    .vn-button{
        border:none;
        cursor: pointer;
        padding: 5px;
        user-select: none;

        transition: background-color 0.3s;

        font-size: 1rem;
    }
</style>