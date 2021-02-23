<template>
  <div>
    Response : {{ res }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      res: ''
    }
  },
  async mounted () {
    this.res = await this.$viaCep.buscarCep('32070660')
  }
}
</script>
