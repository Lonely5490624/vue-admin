<template>
<div>
  <input type="text" placeholder="请输入账号"><br />
  <input type="password" placeholder="请输入密码">
  <router-link to="/callcenter" tag="button">进入</router-link>
  <el-button type="primary" plain>按钮</el-button>
</div>
</template>

<script>
import { Button } from 'element-ui'

export default {
  name: 'login',
  components: {
    'el-button': Button
  }
}
</script>
