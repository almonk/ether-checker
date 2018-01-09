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
  metaInfo: {
    title: 'About us'
  }
}
</script>