<template>
<div>
  <span>{{ count }}</span>
  <button @click.prevent="increment">+</button>
</div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      count: 0,
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
