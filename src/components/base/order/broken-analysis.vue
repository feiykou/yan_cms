<template>
    <div>
        <div class="title">仅一月订单支付数量</div>
        <v-chart :forceFit="true" :height="params.height" :data="data" :scale="params.scale">
            <v-tooltip />
            <v-axis />
            <v-legend />
            <v-line position="date*total_price" />
            <v-point position="date*total_price" shape="circle" />
        </v-chart>
    </div>
</template>

<script>
    import statistics from "@/models/statistics"
    import Utils from '../../../lin/utils/util'
    export default {
        data() {
            return {
                data:[],
                params: {
                    scale: [{
                        dataKey: 'date',
                        range: [0, 1],
                        type: 'timeCat'
                    },{
                        dataKey: 'total_price',
                        alias: '总价格',
                        min: 0,
                    }],
                    height: 400
                }
            };
        },
        created() {
            this.getStatistics()
        },
        methods: {
            async getStatistics() {
                let orderLists = []
                let date = Utils.getDateRange(new Date(), 30, true)
                try {
                    this.loading = true
                    orderLists = await statistics.getOrderBaseStatistics(date[0], date[1], 'day')
                    this.loading = false
                } catch (e) {
                    orderLists = []
                    this.loading = false
                }
                console.log(orderLists)
                this.data = orderLists
            },
        }
    };
</script>

<style scoped>
    .title{
        font-size: 18px;
        margin: 20px 0 30px 50px;
        font-weight: bold;
    }
    .chart-container{
        width: 100%;
    }
</style>
