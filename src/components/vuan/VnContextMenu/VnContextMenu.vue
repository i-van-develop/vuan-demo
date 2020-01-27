<template>
    <div class="vn-context-menu" :style="`top: ${topOffset}px; left: ${leftOffset}px;`">
        <div :class="{'vn-bk-cl-action' : currentHover === index, 'vn-cl-white' : currentHover === index}"
             @mouseenter="currentHover=index" @mouseleave="currentHover=-1" @click.stop="click(item.callback)"
             class="vn-bk-cl-white vn-bd-cl-light-gray vn-context-menu-item"
             v-for="(item, index) in items" :key="index">{{item.label}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "VnContextMenu",
        props: {
            items: Array,
            topOffset: Number,
            leftOffset: Number,
            id: {
                default: null
            }
        },
        data() {
            return {
                currentHover: -1,
                close: function () {
                    window.removeEventListener('click', this.close)
                    this.$el.parentElement.removeChild(this.$el);
                }
            }
        },
        methods: {
            click(callback) {
                callback(this.id)
                this.close()
            },
            init(){
                this.close = this.close.bind(this)
                window.addEventListener('click',this.close)
            }
        }
    }
</script>

<style scoped>
    @import "../styles/styles.module.css";

    .vn-context-menu {
        position: absolute;
        width: 300px;
        z-index: 99;
    }

    .vn-context-menu-item {
        user-select: none;
        cursor: pointer;
        border-width: 1px;
        border-style: solid;
        padding: 5px;
        margin-top: -1px;
    }
</style>