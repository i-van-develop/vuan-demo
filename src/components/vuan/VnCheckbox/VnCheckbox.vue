<template>
    <label class="vn-checkbox">
        <input class="vn-checkbox-input" type="checkbox" :checked="value"
               @change="$emit('input',$event.target.checked)">
        <div class="vn-bd-cl-light-gray vn-checkbox-area vn-bk-cl-white vn-cl-darkest-gray">
            <slot name="checked" v-if="value">
                ✓
            </slot>
        </div>
    </label>
</template>

<script>
    export default {
        name: "VnCheckbox",
        props: {
            value: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .vn-checkbox {
        user-select: none;
        cursor: pointer;
    }

    .vn-checkbox-input {
        display: none;
    }

    .vn-checkbox-area {
        width: 1rem;
        height: 1rem;

        border-style: solid;
        border-width: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>