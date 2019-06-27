<template>
<div>
  <span>{{ count }}</span>
  <button @click.prevent="increment">+</button>
  <button @click.prevent="decrement">-</button>
</div>
</template>

<script>
import { value } from 'vue-function-api'

export default {
  setup () {
    const count = value(0)

    const increment = () => {
      count.value++
    }

    const decrement = () => {
      count.value--
    }

    return {
      count,
      increment,
      decrement,
    }
  },
}
</script>
