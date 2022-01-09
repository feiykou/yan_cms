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
                    { value: 235, name: '抖音' },
                    { value: 274, name: '百度' },
                    { value: 310, name: '淘宝' },
                    { value: 335, name: '公众号' },
                    { value: 400, name: '转介绍' }
                ]
            }
        }
    },
    data() {
        return {
            channelData: [
                "抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
            ],
        }
    },

    mounted() {
    },
    methods: {
        initChart() {
            // var i=0;
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById(this.id));
            var color = ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"];
            // 绘制图表
            const that = this
            console.log(this.odata)
            myChart.setOption({
                backgroundColor: '#fff',
                title: {
                    text: '各渠道来源客户数'
                },
                // color: color,
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    bottom: 20,
                    data: [
                        "抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
                    ]
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 250,
                    inRange: {
                        colorLightness: [0, 1]
                    },
                    color: color
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        data: that.odata,
                        roseType: 'radius',
                        colorBy: 'data',
                        label: {
                            color: 'rgba(0, 0, 0, 0.3)'
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(0, 0, 0, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                        itemStyle: {
                            // color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>