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
            var color = ["#d76662", "#79211f", "#982926", "#b4312d", "#c83732"];
            // 绘制图表
            myChart.setOption({
                backgroundColor: '#fff',
                title: {
                    text: '各渠道来源客户数'
                },
                color: color,
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
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: this.odata,
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
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