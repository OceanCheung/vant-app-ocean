<template>
  <div class="personal">
    <login></login>
    <order></order>
    <red></red>
  </div>
</template>

<script>
  import Login from '../components/personal/Login'
  import Order from '../components/personal/Order'
  import Red from '../components/personal/Red'
  export default {
    name: 'Personal',
    data() {
      return {
  
      }
    },
    components:{
      Login,Order,Red
    }
  }
</script>

<style lang="less" scoped>
  
</style>

