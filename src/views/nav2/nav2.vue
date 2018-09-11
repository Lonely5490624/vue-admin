<template>
  <div>
    <p>这是Nav2</p>
    <!-- <remote-js src="http://localhost:8020/Hbuilder%20Test/js/log.js" /> -->
  </div>
</template>

<script>
export default {
  name: 'Nav2',
  components: {
   'remote-js': {
      render (createElement) {
        return createElement('script', {
          attrs: {
            type: 'text/javascript',
            src: this.src
          }
        })
      },
      props: {
        src: {
          type: String,
          required: true
        }
      }
    }
  },
  mounted () {
    // console.log('mounted')
    // var something = this.$el.outerHTML
  }
}
</script>
