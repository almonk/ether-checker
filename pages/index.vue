<template>
  <div id="canvas" class="bg-washed-red tc flex flex-column justify-center">
    <p class="sans-serif mb2">1 ETH is worth&hellip;</p>
    <span class="f1 db code mb2">{{gbp | currency('GBP') }}</span>
    <span class="f1 db code">{{usd | currency('USD') }}</span>
    <div class="o-50 flex flex-column items-center mt4">
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="20px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
      <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"/>
        </path>
      </svg>
      <span class="db mt2 f6 sans-serif">Live updating</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import currencyFormatter from 'currency-formatter';

export default {
  asyncData ({ params }, callback) {
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP,USD`)
    .then((res) => {
      callback(null, { usd: res.data.USD, gbp: res.data.GBP })
    })
  },
  created: function() {
    setInterval(function(){ 
      this.getData()
    }.bind(this), 2000)
  },
  methods: {
    getData: function (event) {
      axios.get(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP,USD`)
      .then((res) => {
        this.bpi = res.data.bpi
      })
    }
  },
  filters: {
    currency: function (value, code) {
      return currencyFormatter.format(value, { code });
    }
  }
}
</script>

<style scoped>
#canvas {
  height: 100vh;
}
</style>