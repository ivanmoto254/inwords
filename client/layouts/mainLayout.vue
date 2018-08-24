<template lang="pug">
div(:style=`{position: 'relative'}`).row.full-width.window-height.items-center.justify-center
  h1 mainLayout
</template>

<script>
export default {
  name: 'mainLayout',
  components: {},
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    console.log('mainLayout mounted')
  },
  computed: {
  }
}
</script>

<style lang="stylus">
h1
  color red
</style>

