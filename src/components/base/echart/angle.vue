<template>
    <div class="m-echart">
        <!-- <div :class="className" :id="id" :style="{width: width, height: height}"></div>
         -->
         <div class="table-title">渠道排名（前10位）</div>
        <el-table
            :data="tableData"
            style="width: 100%"
            size="mini"
            :row-class-name="tableRowClassName">
                <el-table-column
                    prop="name"
                    filters=""
                    label="渠道名">
                </el-table-column>
                <el-table-column
                    prop="value"
                    label="数值">
                </el-table-column>
        </el-table>
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
        odata: Array
    },
    data() {
        return {
            channelData: [
                "抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
            ],
            tableData: []
        }
    },

    mounted() {
    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (rowIndex % 2 === 0) {
                return 'success-row';
            }
            return '';
        },
        initChart() {
            // var i=0;
            // 基于准备好的dom，初始化echarts实例
            // let myChart = this.$echarts.init(document.getElementById(this.id));
            // var color = ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"];
            // 绘制图表
            let odata = this.odata.splice(-10,10)
            odata.sort(function(a, b) {
                return b.value- a.value
            })
            this.tableData = odata
            console.log(1111);
            // myChart.setOption({
            //     backgroundColor: '#fff',
            //     title: {
            //         text: '各渠道来源客户数'
            //     },
            //     // color: color,
            //     tooltip: {
            //         trigger: 'item'
            //     },
            //     legend: {
            //         orient: 'vertical',
            //         right: 10,
            //         top: 20,
            //         bottom: 20,
            //         data: [
            //             "抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
            //         ]
            //     },
            //     visualMap: {
            //         show: false,
            //         min: 0,
            //         max: 250,
            //         inRange: {
            //             colorLightness: [0, 1]
            //         },
            //         color: color
            //     },
            //     series: [
            //         {
            //             name: '访问来源',
            //             type: 'pie',
            //             radius: '55%',
            //             data: odata,
            //             roseType: 'radius',
            //             colorBy: 'data',
            //             label: {
            //                 color: 'rgba(0, 0, 0, 0.3)'
            //             },
            //             labelLine: {
            //                 lineStyle: {
            //                     color: 'rgba(0, 0, 0, 0.3)'
            //                 },
            //                 smooth: 0.2,
            //                 length: 10,
            //                 length2: 20
            //             },
            //             itemStyle: {
            //                 // color: '#c23531',
            //                 shadowBlur: 200,
            //                 shadowColor: 'rgba(0, 0, 0, 0.5)'
            //             },
            //             animationType: 'scale',
            //             animationEasing: 'elasticOut',
            //             animationDelay: function (idx) {
            //                 return Math.random() * 200;
            //             }
            //         }
            //     ]
            // });
        }
    }
}
</script>

<style lang="scss" >
    .m-echart{
        padding: 15px 20px;
    }
    .table-title{
        margin-bottom: 10px;
        font-size: 18rpx;
        font-weight: bold;
        color: #464646;
    }
    thead tr{
        height: 50px;
    }
    .el-table__body tr{
        height: 38px;
    }
    .el-table .success-row {
        background: #f0f0f0;
    }
</style>