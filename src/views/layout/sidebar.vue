<template>
  <el-aside>
    <div class="logo">
      <router-link to="/callcenter">
        <i class="iconfont icon-bajiehujiaozhongxin"></i>
        <span class="text ml10">八戒呼叫中心</span>
      </router-link>
    </div>
    <ul>
      <li>
        <router-link to="/callcenter/seats">
          <i class="iconfont icon-zuocedaohangtonghua"></i>
          <span class="text ml10">坐席管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/callcenter/nav2">
          <i class="iconfont icon-zuocedaohangtonghua"></i>
          <span class="text ml10">导航2</span>
        </router-link>
      </li>
      <li>
        <router-link to="/callcenter/nav3">
          <i class="iconfont icon-zuocedaohangtonghua"></i>
          <span class="text ml10">导航3</span>
        </router-link>
      </li>
    </ul>
  </el-aside>
</template>
<script>
import { Aside } from 'element-ui'

export default {
  name: 'Sidebar',
  props: ['asideWidth'],
  components: {
    'el-aside': Aside
  }
}
</script>
<style lang="less">
@import url('../../style/common/vars.less');

.el-aside{
  width: @nav-width-large !important;
  background: #2c333b;
  color: #fff;
  transition: @nav-width-duration 0s ease-in-out;
  &.isFold{
    width: @nav-width-small !important;
    .text{
      display: none;
    }
  }
  .logo{
    width: 100%;
    line-height: 50px;
    height: 50px;
    overflow: hidden;
    a{
      display: block;
      padding-left: 13px;
      &:hover{
        opacity: 1;
      }
      i{
        font-size: 26px;
        vertical-align: middle;
      }
      .text{
        font-size: 18px;
        line-height: 1;
        font-weight: bold;
      }
    }
  }
  li{
    height: 40px;
    line-height: 40px;
    text-align: left;
    overflow: hidden;
    a {
      display: block;
      padding-left: 18px;
      &:hover{
        border-right: 4px solid #12d2cb;
        background: #42484f;
      }
      &.router-link-active{
        border-right: 4px solid #12d2cb;
        background: #42484f;
      }
      .text{
        font-size: 14px;
      }
    }
  }
}
</style>
