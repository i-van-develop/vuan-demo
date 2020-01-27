<template>
    <div id="app">
        <vn-table :is-selectable="true" :is-enumerable="true" :headers="headers" :buttons="buttons" :data="data" @select="consoleLog"/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
<script>
    import VnTable from "./components/vuan/VnTable/VnTable"

    export default {
        components: {VnTable},
        data() {
            return {
                headers: [
                  {
                    label: 'Name'
                  },
                  {
                    label: 'Cost'
                  }
                ],
              buttons: [
                {
                  label: 'Edit',
                  callback: (id) => {console.log(id)}
                },
                {
                  label: 'Delete',
                  callback: (id) => {console.log(id)}
                }
              ],
              data: [
                {
                  id:1,
                  cols: [
                          'Socks',
                          '10'
                  ]
                },
                {
                  id:2,
                  cols: [
                          'Shirt',
                          '20'
                  ]
                }
              ]
            }
        },
        methods: {
            consoleLog(...args){
                console.log(...args)
            }
        }
    }
</script>