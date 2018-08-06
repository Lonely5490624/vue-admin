<template>
  <div class="seats">
    <div class="seats-tab">
      <div
        v-for="item in seatTabs"
        :key="item.tab"
        @click="changeTab(item)"
        :class="{ active: tab == item.tab }"
        class="seats-tab-item"
      >{{ item.name }}</div>
    </div>
    <div class="seats-content">
      <Seat v-if="tab == 'seat'" />
      <Department v-if="tab == 'department'" />
      <Skill v-if="tab == 'skill'" />
      <Role v-if="tab == 'role'" />
    </div>
  </div>
</template>

<script>
import Seat from './seat.vue'
import Department from './department.vue'
import Skill from './skill.vue'
import Role from './role.vue'

export default {
  name: 'Seats',
  data: function () {
    return {
      seatTabs: [{
        tab: 'seat',
        name: '坐席'
      }, {
        tab: 'department',
        name: '部门'
      }, {
        tab: 'skill',
        name: '技能分组'
      }, {
        tab: 'role',
        name: '角色'
      }]
    }
  },
  components: {
    Seat,
    Department,
    Skill,
    Role
  },
  created: function () {
    if (!this.$route.query.tab) this.$router.replace({query: {tab: 'seat'}})
  },
  methods: {
    changeTab: function (item) {
      this.$router.push({query: {tab: item.tab}})
    }
  },
  computed: {
    tab: function () {
      return this.$route.query.tab
    }
  },
  watch: {
		'$route': function () {
      if (!this.$route.query.tab) this.$router.replace({query: {tab: 'seat'}})
    }
  }
}
</script>

<style lang="less" scoped>
.seats{
  .seats-tab{
    padding-top: 17px;
    padding-left: 25px;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0;
    .seats-tab-item{
      display: inline-block;
      width: 100px;
      height: 40px;
      border: 1px solid #e4e4e4;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      margin-right: 10px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      color: #414b56;
      background-color: #f4f4f4;
      position: relative;
      top: 1px;
      cursor: pointer;
      &.active{
        background-color: #fff;
        color: #12d2cb;
        border-bottom-color: #fff;
      }
    }
  }
}
</style>
