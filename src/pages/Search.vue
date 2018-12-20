<template>
  <div class="search">
    <searchHead></searchHead>
    <searchInput></searchInput>
    <scrollTab></scrollTab>
  </div>
</template>

<script>
  import SearchHead from '../components/search/SearchHead'
  import SearchInput from '../components/search/SearchInput'
  import ScrollTab from '../components/search/ScrollTab'
  export default {
    name: 'Search',
    data() {
      return {
  
      }
    },
    components: {
      SearchHead,
      SearchInput,
      ScrollTab
    }
  }
</script>

<style lang="less" scoped>
  
</style>

