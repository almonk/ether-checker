      <head>
      <title>Test</title>
    </head>
<template>
  <div>

    testetstest {{name}}
    
    
    {{bpi.USD.rate}}
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
  metaInfo: {
    title: 'TEST'
  }
}
</script>