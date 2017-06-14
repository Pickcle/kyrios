<template lang="jade">
  div
    my-render(:level="4", :number="5")
      p(slot="header") header
      p(slot="footer") footer
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" scoped>
</style>
