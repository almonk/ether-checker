<template>
  <div>
    testetstest {{name}}
    {{bpi.USD.rate}}
    {{bpi.GBP.rate}}
    
    <button v-on:click="getData">
      Refresh
    </button>
  </div>
</template>

<script>
import axios from 'axios';
  
export default {
  asyncData ({ params }, callback) {
    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then((res) => {
      callback(null, { title: res.data.chartName, bpi: res.data.bpi })
    })
  },
   methods: {
    getData: function (event) {
      axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((res) => {
        callback(null, { title: res.data.chartName, bpi: res.data.bpi })
      })
    }
   }
}
</script>