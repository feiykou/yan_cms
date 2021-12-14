<template>
    <div>
        <div :class="className" :id="id" :style="{width: width, height: height}"></div>
    </div>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
            default: 'echart'
        },
        id: String,
        width: String,
        height: String,
        odata: {
            type: Array,
            default: function() {
                return [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        }
    },
    data() {
        return {
            chart: null
        }
    },
    mounted() {
    },
    methods: {
        initChart() {
            const that = this
            // var i=0;
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById(this.id));
            // var color = ["#19D672", "#FD517D"];
            // 绘制图表
            const option = {
                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                title: {
                    text: '客户跟进趋势'
                },
                // 工具鼠标十字线
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                // 显示标签，选中显示隐藏数据线
                legend: {
                    data: ['跟进数量']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // x轴显示
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: that.odata['x']
                    }
                ],
                // y轴显示
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '跟进数量',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(128, 255, 165)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(1, 191, 236)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: that.odata['value']
                    }
                ]
            };
        
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>