<template>
    <div name="centerTypeOne">
        <carousel></carousel>
        <hot></hot>
        <advertisement></advertisement>
        <seckill></seckill>
    </div>
</template>

<script>
    import Carousel from '../../home/Carousel'
    import Hot from '../../home//Hot'
    import Seckill from '../../home/Seckill'
    import Advertisement from '../../home/Advertisement'
    export default {
        name: "CenterTypeOne",
        data() {
            return {
    
            }
        },
        components: {
            Carousel,
            Hot,
            Seckill,
            Advertisement
        }
    }
</script>

<style lang="less" scoped>
    
</style>


