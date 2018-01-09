<template>
  <div>
    testetstest {{name}}
  </div>
</template>

<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>

<style scoped>
  div {
    font-size: 20px; 
  }
</style>