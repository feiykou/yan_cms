<template>
    <div class="m-echart">
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
            type: Object,
            default: function() {
                return {x:[], value: []}
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
                title: {
                    text: '新增客户数量'
                },
                // 工具鼠标十字线
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['新增客户数量']
                },
                xAxis: {
                    type: 'category',
                    data: that.odata['x']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: that.odata['value'],
                        type: 'line',
                        name: '新增客户数量'
                    }
                ]
            };
        
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
    .m-echart{
        padding: 15px 20px;
    }
</style>