<template>
  <div>
    testetstest {{name}}
    
    {{title}}
  </div>
</template>

<script>
import axios from 'axios';
  
export default {
  asyncData ({ params }, callback) {
    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then((res) => {
      callback(null, { title: res.data.chartName })
    })
  }
}
</script>

<style scoped>
  div {
    font-size: 20px; 
  }
</style>