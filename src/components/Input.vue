<template>
  <input type="text" v-model="msg" />
</template>

<script>
export default {
  emits: ['msg'],
  data () {
    return {
      msg: ''
    }
  },
  watch: {
    msg () {
      this.$emit('msg', this.msg)
    }
  }
}
</script>

<style></style>
