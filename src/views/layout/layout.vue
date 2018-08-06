<template>
  <el-container>
    <Sidebar :class="{ isFold: isFold }" />
    <el-container class="is-vertical">
      <Header @toggleNav="toggleNav" />
      <el-main>
        <div class="main" style="min-width: 1000px;">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './sidebar.vue'
import Header from './header.vue'

import { Main, Container } from 'element-ui'

export default {
	name: 'Layout',
	data: function () {
		return {
			isFold: false
		}
	},
	methods: {
		toggleNav: function () {
			this.isFold = !this.isFold
		}
	},
	components: {
		Sidebar,
    Header,
    'el-main': Main,
    'el-container': Container
	}
}
</script>
<style lang="less">
@import url(../../style/app.less);

#app{
  height: 100%;
  & > .el-container {
    height: 100%;
  }
}
.el-main{
  padding: 0;
}
</style>
