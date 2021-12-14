<template>
    <div class="columnar-container">
        <div class="title">仅一周用户新增人数</div>
        <v-chart :forceFit="true" :height="400" :scale="params.scale" :padding="params.padding">
            <v-tooltip :shared="true" />
            <v-view :data="data">
                <v-axis dataKey='date' :label="params.label" :tickLine="params.tickLine"/>
                <v-axis dataKey='count' :label="params.label" :title="params.title"/>
                <v-interval position="date*count" :opacity="1" />
            </v-view>
           <v-view :data="dv.rows">
               <v-tooltip :show="false" />
               <v-line position="date*count" :vStyle="params.style" />
               <v-guide type="text" content="趋势线" :position="params.pos" :vStyle="params.guideStyle" :offsetY="-140" />
           </v-view>
        </v-chart>
    </div>
</template>

<script>
    import Utils from "../../../lin/utils/util";

    const DataSet = require('@antv/data-set');
    import statistics from "@/models/statistics"


    export default {
        data() {
            return {
                data:[],
                dv:{},
                params: {
                    scale: {},
                    label: {},
                    tickLine: {},
                    title: {},
                    style: {},
                    guideStyle: {},
                    pos:['min', 'min'],
                    padding:[20, 20, 50, 110],
                }
            };
        },
        created() {
            this.getStatistics()
        },
        methods: {
            createData(data) {
                const ds = new DataSet();
                this.data = data
                const dv = ds.createView().source(data);
                dv.transform({
                    type: 'map',
                    callback: function callback(row) {
                        row.date = parseInt(row.date);
                        return row;
                    }
                }).transform({
                    type: 'regression',
                    method: 'polynomial',
                    fields: ['date', 'count'],
                    bandwidth: 0.1,
                    as: ['date', 'count']
                });
                this.dv = dv
                this.setData()
            },
            setData() {
                this.params = {
                    guideStyle: {
                        fill: '#8c8c8c',
                        fontSize: 14,
                        fontWeight: 300
                    },
                    style: {
                        stroke: '#969696',
                        lineDash: [3, 3]
                    },
                    title: {
                        offset: 50
                    },
                    tickLine: {
                        alignWithLabel: false,
                        length: 0
                    },
                    label: {
                        textStyle: {
                            fill: '#aaaaaa'
                        }
                    },
                    scale: [{
                        dataKey: 'count',
                        alias: '数量（单）'
                    }, {
                        dataKey: 'date',
                        range: [0, 1],
                        alias: '星期'
                    }]
                }
            },
            async getStatistics() {
                let orderLists = []
                try {
                    this.loading = true
                    let date = Utils.getDateRange(new Date(), 6, true)
                    orderLists = await statistics.getCustomerBaseStatistics(date[0], date[1], 'day')
                    console.log(orderLists)
                    orderLists.forEach(res => {
                        res['date'] = Utils.getWeeksByDay(res['date'])
                    })
                    this.createData(orderLists)
                } catch (e) {
                    orderLists = []
                    this.loading = false
                }
                this.data = orderLists
            },
        }
    };
</script>
<style scoped>
    .columnar-container{
        margin-top: 50px;
    }
    .title{
        font-size: 18px;
        margin: 20px 0 30px 10px;
        font-weight: bold;
    }
</style>