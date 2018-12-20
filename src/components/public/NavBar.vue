<template>
    <div class="navBar">
        <navHead v-if="this.$store.state.navType==1"></navHead>
        <recommendHead v-if="this.$store.state.navType==2"></recommendHead>
    </div>
</template>

<script>
    import NavHead from '../home/NavHead'
    import RecommendHead from '../recommend/RecommendHead'
    
    export default {
        name: "NavBar",
        components: {
            NavHead,
            RecommendHead
        }
    }
</script>

<style lang="less" scoped>
    .navBar {
        // position: fixed;
        // top: 100px;
        // height: 100px;
    }
</style>

