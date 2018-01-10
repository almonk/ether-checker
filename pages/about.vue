<template>
  <p>Hi from {{ name }}</p>
</template>

<script>
export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: "This is about us"
    }
  }
}
</script>