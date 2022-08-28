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
                return {
                    value: [],
                    x: []
                }
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
                    text: '未跟进数量'
                },
                tooltip: {
                    trigger: 'item'
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
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
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