<template>
<div>
  <input type="text" v-model="username" placeholder="请输入账号:admin" @keyup.enter="login"><br />
  <input type="password" v-model="password" placeholder="请输入密码:admin" @keyup.enter="login">
  <el-button type="primary" plain @click="login">登录</el-button>
</div>
</template>

<script>
import { Button } from 'element-ui'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: 'admin'
    }
  },
  components: {
    'el-button': Button
  },
  methods: {
    login () {
      if (!this.username) {
        this.$message.error('请输入账号！')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码！')
        return
      }
      if (this.username !== 'admin' || this.password !== 'admin') {
        this.$message.error('账号或密码错误！')
        return
      }
      window.localStorage.setItem('token', '121212')
      this.$router.push({ path: 'callcenter' })
    },
    submit () {
      console.log(1)
    }
  }
}
</script>
