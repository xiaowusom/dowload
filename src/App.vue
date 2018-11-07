<template>
  <div id="app">
     <table id = "data">
       <tr >
         <th>1</th>
         <th>2</th>
         <th>3</th>
         <th>4</th>
       </tr>
       <tr>
         <td>1</td>
         <td>1</td>
         <td>1</td>
         <td>1</td>
       </tr>
     </table>
     <button @click="downLoad('data')">下载</button>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    downLoad(data) {
      this.$download.method5(data)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
