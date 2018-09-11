<template>
  <div>
    <p>这是Nav3</p>
    <button @click="getData">点我</button>
  </div>
</template>

<script>
import api from 'utils/api'

export default {
  name: 'Nav3',
  methods: {
    async getDatas () {
      let { data } = await api.get('/api/getSnsAccessToken', { accessToken: 1, phone: 17623005313 })
      console.log(data)
    },
    async getData () {
      await this.getDatas()
    }
  }
}
</script>
