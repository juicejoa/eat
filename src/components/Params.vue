<template>
  <div>
    <h1>Home Page</h1>
    <h2>환영 합니다~ {{ $route.params.name }}님아~~</h2>
    <h2>email: {{ $route.params.email }}</h2>
    <h2>name: {{ $route.params.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Params',
  props: {
    name: {
      type: String,
      default: ''
    },
    email: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
</style>
