<template>
  <div>
    <!-- <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>工号</th>
          <th>账号</th>
          <th>所属部门</th>
          <th>角色</th>
          <th>开通日期</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.userId">
          <td>{{ item.userName }}</td>
          <td>{{ item.worknum }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.groupName }}</td>
          <td>{{ item.roleName }}</td>
          <td>{{ item.createTime }}</td>
          <td @click="openPop(item)">编辑</td>
        </tr>
      </tbody>
    </table> -->
    <el-table
      :data="list">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150"></el-table-column>
      <el-table-column
        prop="name"
        label="姓名"></el-table-column>
      <el-table-column
        prop="province"
        label="省份"></el-table-column>
      <el-table-column
        prop="city"
        label="市区"></el-table-column>
      <el-table-column
        prop="address"
        label="地址"></el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"></el-table-column>
    </el-table>
    <Pop :isShow="show" />
    <transition name="slide">
      <div v-if="show" class="edit">
        <div class="close" @click="closePop">关闭</div>
        <input type="text" v-model="currentItem.userName">
        <input type="text" v-model="currentItem.workNum">
        <input type="text" v-model="currentItem.phone" disabled>
      </div>
    </transition>
  </div>
</template>
<script>
import Pop from '../layout/pop.vue'
import { deepClone } from '../../utils/tool'
import { Table, TableColumn } from 'element-ui'

export default {
  name: 'Seat',
  data: function () {
    return {
      list: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      show: false,
      currentItem: null
    }
  },
  components: {
    Pop,
    'el-table': Table,
    'el-table-column': TableColumn
  },
  created: function () {
    let api = 'https://callcenter-test.zbjdev.com/ccmanager/user/list?token=8exsSSHb251jsyJBNr7Um4fiw%2Fnc9c0YaazcQJ53BL3zmyXvYZDdxMDt15a1%2BA%3D%3D&page=1&limit=10&keyword=&isAjax=1&islogin=1&userId=7'
    this.axios.get(api).then(response => {
      // this.list = response.data.data.list
    })
  },
  methods: {
    openPop: function (item) {
      this.currentItem = deepClone(item)
      this.show = true
    },
    closePop: function () {
      this.currentItem = null
      this.show = false
    }
	}
}
</script>

<style lang="less" scoped>
.edit {
  background-color: red;
  width: 100px;
  height: 100px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  &.slide-enter { right: -100px; }
  &.slide-enter-active {  transition: all .6s ease-in-out;}
  &.slide-enter-to { right: 0;}
  &.slide-leave { right: 0; }
  &.slide-leave-active {  transition: all .6s ease-in-out;}
  &.slide-leave-to { right: -100px}
}
</style>
