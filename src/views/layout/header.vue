<template>
  <el-header>
    <el-button @click="toggleNav" class="collspan">X</el-button>
    <div class="fr"><el-button @click="loginout">退出登录</el-button></div>
  </el-header>
</template>
<script>
import { Header, Button } from 'element-ui'

export default {
  name: 'Header',
  components: {
    'el-header': Header,
    'el-button': Button
  },
  methods: {
    toggleNav: function () {
      this.$emit('toggleNav')
    },
    loginout: function () {
      window.localStorage.removeItem('token')
      this.$router.replace({ path: '/login' })
    }
	}
}
</script>
<style lang="less">
.el-header {
  height: 50px !important;
  line-height: 49px;
  border-bottom: 1px solid #efefef;
  vertical-align: middle;
  background: #fff;
}
</style>
