<template>
  <transition name="fade">
    <div v-if="isShow" class="pop"></div>
  </transition>
</template>
<script>
export default {
  name: 'Pop',
  props: ['isShow']
}
</script>
<style lang="less" scoped>
.pop{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .6);
  &.fade-enter, &.fade-leave-to{opacity: 0;}
  &.fade-enter-active, &.fade-leave-active{transition: all .6s ease-in-out}
  &.fade-leave, &.fade-enter-to{opacity: 1;}
}
</style>
