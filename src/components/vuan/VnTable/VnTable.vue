<template>
    <table class="table">
        <thead class="thead">
        <tr class="tr-head row vn-cl-white vn-bk-cl-primary vn-bd-cl-dark-primary">
            <th class="th col" v-if="isEnumerable">{{enumerationHeader}}</th>
            <th class="th col" v-if="isSelectable">
                <vn-checkbox v-model="selectedAll"/>
            </th>
            <th class="th col" v-for="(header, i) in headers" :key="i">{{header.label}}</th>
            <th class="th col" v-for="(button, i) in buttons" :key="i+headers.length">{{button.label}}</th>
        </tr>
        </thead>
        <tbody class="tbody">
        <tr class="tr-body row" v-for="(item, i) in data" :key="item.id">
            <td class="td col" v-if="isEnumerable">{{i + enumerationStart}}</td>
            <td class="td col" v-if="isSelectable">
                <vn-checkbox :value="selectedIds.includes(item.id)" @input="selectToggle($event, item.id)"/>
            </td>
            <td @click="openContextMenu($event, item.id)" class="td col" v-for="(col, j) in item.cols" :key="j">{{col}}</td>
            <td class="td col" v-for="(button, j) in buttons" :key="j + item.cols.length">
                <vn-button @click="button.callback(item.id)" :label="button.label"/>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import VnButton from "../VnButton/VnButton"
    import VnCheckbox from "../VnCheckbox/VnCheckbox"
    import createContextMenu from "../VnContextMenu/createContextMenu"

    export default {
        name: "VnTable",
        components: {VnCheckbox, VnButton},
        props: {
            isEnumerable: {
                type: Boolean,
                default: false
            },
            enumerationStart: {
                type: Number,
                default: 1
            },
            enumerationHeader: {
                default: '№'
            },
            isSelectable: {
                type: Boolean,
                default: false
            },
            headers: Array,
            data: Array,
            buttons: Array
        },
        data() {
            return {
                selectedIds : [],
                selectedAll : false
            }
        },
        watch: {
            selectedAll (value){
                if (value){
                    this.selectedIds = this.data.map(item => item.id)
                } else {
                    this.selectedIds = []
                }
            },
            selectedIds (value){
                this.$emit('select', value)
            }
        },
        methods: {
            selectToggle(value, id){
                if (value){
                    this.selectedIds.push(id)
                } else {
                    this.selectedIds = this.selectedIds.filter(_id => _id !== id)
                }
            },
            openContextMenu(event, id){
                createContextMenu(event, [
                    {
                        label: "hello 1",
                        callback: (_id) => {console.log('hello 1', _id)}
                    },
                    {
                        label: "hello 2",
                        callback: (_id) => {console.log('hello 2', _id)}
                    }
                ], {id})
                console.log(event)
            }
        }
    }
</script>

<style scoped>
    @import "../styles/styles.module.css";

    .table{
        border-collapse: collapse;
    }
    .col{
        position: relative;
        border-color: inherit;
        border-width: 1px;
        border-style: solid;
        padding: 5px;

        font-size: 1rem;
    }

</style>