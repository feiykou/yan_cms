<template>
    <div>
        <div :class="className" :id="id" :style="{width: width, height: height}"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: {
        className: {
            type: String,
            default: 'echart'
        },
        id: String,
        width: String,
        height: String
    },
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>